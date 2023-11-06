/* consulta para determinar el asesino con el mayor numero de muertes de titanes */
select a.nombre, count(m.id) as numero_de_titanes
from assassins a
join muertes m on a.id = m.id_ejecutor
where year(m.fecha) = 2020
group by a.id;

/* consulta para obtener la persona con el mayor numero de titanes muertos en el 2020 */
select a.nombre, count(m.id) as numero_de_titanes
from assassins a
join muertes m on a.id = m.id_ejecutor
where year(m.fecha) = 2020
group by a.id
order by numero_de_titanes desc
limit 1;