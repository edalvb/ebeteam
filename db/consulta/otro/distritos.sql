SELECT d.id, d.codigo, de.nombre AS Departamento, p.nombre AS Provincia, d.nombre AS Distrito, d.capital
FROM distritos d
INNER JOIN provincias p
	ON p.id = d.provincia
INNER JOIN departamentos de
	ON de.id = p.departamento
LIMIT 5000;