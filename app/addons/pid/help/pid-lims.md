---
title: P&ID: connect your lab system
summary: Enter the address of your own lab system (LIMS), check the settings and test the connection step by step in CadCraft Studio. Only the name of your key is saved.
section: tasks
order: 50
keywords: lims, lab, laboratory, sample, results, connection, secret, studio, csv, rest
---

A drafting and study aid, not an engineering approval. Nothing here is applied to a stream by itself: samples become proposals you accept or reject in the lab-system calculator.

Open **Connect your lab system** in the add-on panel.

1. Choose how the samples reach you: a web service (REST, JSON) or exported files (CSV).
2. Name the connection. For a web service type the https address. Local and private addresses are refused.
3. Type the header name that carries your key (for example Authorization) and the name of the saved key. The key itself stays in CadCraft Studio's credential store. Only its name is saved with the drawing.
4. If your system names things differently, list the paths and field names, one per line as `name=value`.
5. **Check the settings** works anywhere and puts anything wrong into the Problems list.
6. **Test the connection** works inside CadCraft Studio only. It reaches the system, lists samples, reads one and its results, and tells you which step failed. In a browser tab it says so and sends nothing.

"Send calculated values back" is off by default and only a web service can use it. Values sent back are labelled calculated.

What is not here: a check against a real lab system has not been done by us, so the field names and paths are yours to confirm. Exported files are read by the lab-system calculator (`lims`), not by this panel.
