# SPDX-License-Identifier: Apache-2.0
"""make-binary-dxf.py <out folder> — binary DXF fixtures written by another program (ezdxf, run as a black box).

For each of R12, R2000 and R2018 the same small drawing is saved twice by ezdxf, as binary DXF and as ASCII DXF, so a
reader can be checked group by group: the binary file must read as exactly its ASCII twin. ezdxf's fixed test metadata
keeps the two saves identical apart from their encoding.

The drawing uses every kind of value a binary DXF stores: strings, doubles (points, heights, angles), 16-, 32- and
64-bit integers, booleans and binary chunks (extended data), with non-ASCII text, a bulged polyline, a block reference
with an attribute and, from R2000 on, a hatch, an MTEXT and an ellipse. R12 files use 1-byte group codes; R2000 and
later 2-byte codes.

  tools/cadcraft-test/venv/bin/python tools/cadcraft-test/make-binary-dxf.py fixtures/dxf-binary
"""
import os
import sys

import ezdxf

ezdxf.options.write_fixed_meta_data_for_testing = True


def drawing(ver):
    doc = ezdxf.new(ver)
    doc.units = 4 if ver != 'R12' else 0
    doc.layers.add('WALLS', color=5)
    doc.layers.add('NOTES', color=2)
    msp = doc.modelspace()
    msp.add_line((0, 0), (4000.125, 0), dxfattribs={'layer': 'WALLS'})
    msp.add_line((4000.125, 0), (4000.125, 3000.5), dxfattribs={'layer': 'WALLS', 'color': 1})
    msp.add_circle((1000, 1000), 250.75, dxfattribs={'layer': 'WALLS'})
    msp.add_arc((2000, 1500), 400, 15.5, 200.25, dxfattribs={'layer': 'WALLS'})
    msp.add_text('Küche Ø 1/3', dxfattribs={'layer': 'NOTES', 'height': 125, 'insert': (100, 2800), 'rotation': 7.5})
    msp.add_point((1e-7, -2.5e9))
    if ver == 'R12':
        msp.add_polyline2d([(0, 0), (500, 0), (500, 500)], close=True, dxfattribs={'layer': 'WALLS'})
    else:
        msp.add_lwpolyline([(0, 0, 0, 0, 0.5), (500, 0, 0, 0, 0), (500, 500, 0, 0, -1)], format='xyseb', close=True, dxfattribs={'layer': 'WALLS'})
        msp.add_mtext('Two lines\\Pof text', dxfattribs={'layer': 'NOTES', 'char_height': 80, 'insert': (100, 3500), 'width': 900})
        msp.add_ellipse((3000, 2000), major_axis=(600, 100), ratio=0.4, start_param=0.25, end_param=5.5)
    blk = doc.blocks.new('TAG')
    blk.add_circle((0, 0), 50)
    blk.add_attdef('NO', (0, -20), dxfattribs={'height': 30})
    ref = msp.add_blockref('TAG', (3500, 500), dxfattribs={'xscale': 1.5, 'yscale': 1.5, 'rotation': 30})
    ref.add_attrib('NO', '7A', (3500, 480))
    if ver != 'R12':
        hatch = msp.add_hatch(color=3)
        hatch.paths.add_polyline_path([(2500, 2500), (3000, 2500), (3000, 2900), (2500, 2900)], is_closed=True)
        doc.appids.add('CCTEST')
        pl = msp.add_line((0, 3000), (10, 3000))
        pl.set_xdata('CCTEST', [(1000, 'note'), (1004, bytes(range(0, 256, 3))), (1070, -7), (1071, 2147483000), (1040, 0.1)])
    return doc


def main():
    out = sys.argv[1] if len(sys.argv) > 1 else 'fixtures/dxf-binary'
    os.makedirs(out, exist_ok=True)
    for ver in ('R12', 'R2000', 'R2018'):
        doc = drawing(ver)
        name = 'ezdxf-' + ver.lower()
        doc.saveas(os.path.join(out, name + '.dxf'), fmt='bin')
        doc.saveas(os.path.join(out, name + '-ascii.dxf'))
        print(name, os.path.getsize(os.path.join(out, name + '.dxf')), os.path.getsize(os.path.join(out, name + '-ascii.dxf')))


if __name__ == '__main__':
    main()
