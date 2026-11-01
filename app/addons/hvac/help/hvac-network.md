---
title: HVAC: pressure in the whole duct network
summary: DUCTNET follows the drawn ducts from the fan, finds the pressure lost to every free end, the critical path, the damper each other end needs and the fan pressure.
section: reference
order: 25
keywords: network, pressure, critical path, fan pressure, damper, balancing, fitting loss, DUCTNET, DNET, static pressure, system
---

{{cmd:DUCTSIZE}} sizes one run. {{cmd:DUCTNET}} (`DNET`) looks at the whole drawn system.

1. Give each section its airflow (the {{ui:Airflow}} of the duct, in cfm or L/s). The free end of a run takes the airflow of the section at that end.
2. Type {{cmd:DUCTNET}} and click the end of the run where the fan or air handler connects. Ends that touch another run are joined; branches are found where one run ends on another.
3. It prints each free end with its airflow and the pressure lost on the way from the fan, the **critical path** (the end that loses most), the **damper** each other end needs to balance, and the **fan pressure**: the critical path plus the pressure of coils and filters you type with the {{ui:Equipment}} option (from the makers' data).

Friction comes from the same Colebrook formula as the sizing. Fittings (elbows, the turn where a size changes, branch takeoffs) use a short list of rounded default coefficients: they are labelled defaults, not a fitting database, and stack effect is ignored. Check the result with your engineer before relying on it.

Sections that are too small for their airflow, too fast or too flat are listed by run. Loops are ignored (the calculation follows a tree) and said. {{ui:Method}} switches the size check between equal friction and a velocity limit. {{ui:Export}} › Duct network pressure writes every section to CSV.
