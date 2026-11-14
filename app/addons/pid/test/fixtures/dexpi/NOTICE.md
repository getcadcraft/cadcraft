# DEXPI sample fixtures

`E01V01-ING.EX01.xml` and `E02V01-ING.EX01.xml` are two of the small published test cases of the DEXPI initiative
(github.com/DEXPI/TestCases). The repository carries no licence file. They are shipped here unchanged, as test data only,
on the owner's decision of 2026-10-29, so the round-trip test (`test/t-dexpi.mjs`) runs on a clean clone.
They are not part of the add-on's code, are not loaded by the add-on and are not offered for download. If the DEXPI group
asks for their removal, delete this folder: the test then uses the larger corpus in `testfiles/dexpi-corpus` when present, else skips.
Nothing in CadCraft was copied from a DEXPI tool; the format was learned from the sample files.
