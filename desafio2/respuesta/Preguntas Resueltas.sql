/*1.	Nombre, altura, y fecha de muerte de todos los titanes que hayan muerto por “Accidente”, ordenados cronológicamente. */
select t.nombre, t.altura, m.causa ,m.fecha
from technicaltest.muertes m
join titanes t on t.id = m.id_titan
where causa='Accidente'
order by m.fecha asc;

/*2.	Nombre y altura del titán más alto que haya matado el “Batallón 1”. */
select t.nombre, t.altura
from technicaltest.titanes t
inner join muertes m on t.id = m.id_titan
where m.causa like '%Batallón 1%'
order by t.altura desc
limit 1;

/*3.	Nombre y altura de titanes que no se han podido matar aún, junto con su último avistamiento (más reciente), ordenados por altura incrementalmente. */
select t.nombre, t.altura, MAX(a.fecha) as 'Último avistamiento'
from technicaltest.titanes t
left join avistamientos a on t.id = a.id_titan
where t.id not in (select id_titan from muertes)
group by t.id
order by t.altura asc;

/*4.	Lista de titanes que hayan sido vistos más de una vez el mismo año, ordenados por nombre incrementalmente. */
select t.id, t.nombre, COUNT(*) as veces_visto
from technicaltest.titanes t
join avistamientos a on t.id = a.id_titan
group by year(a.fecha), a.id_titan
having COUNT(*) > 1
order by t.nombre desc;

/*5.	Lista de recursos que se han usado (recurso, cantidad, unidad) en matar titanes pequeños (<= 5 metros), agrupados por recurso y ordenados por cantidad. */
select r.nombre as recurso, sum(mr.cantidad) as cantidad, r.unidad
from technicaltest.movimientos_recursos mr
join movimientos m on mr.id_movimiento = m.id
join muertes mu on mr.id_muerte = mu.id
join titanes t on mu.id_titan = t.id
join recursos r on mr.id_recurso = r.id
where t.altura <= 5
group by r.nombre, r.unidad
order by cantidad;

/*6.	Recurso que se utiliza más comúnmente para matar titanes de 9 metros, ordenado por cantidad de usos descendiente. */
select r.nombre, count(*) as cantidad
from technicaltest.movimientos_recursos mr
join recursos r on mr.id_recurso = r.id
join movimientos m on mr.id_movimiento = m.id
join muertes mu on mr.id_muerte = mu.id
join titanes t on mu.id_titan = t.id
where t.altura = 9
group by r.nombre
order by cantidad desc;

/*7.	Lista de titanes con incongruencias en torno a sus fechas de muerte y avistamientos, ordenados por su identificador, incrementalmente. */
SELECT t.id, t.nombre, t.altura, a.fecha AS fecha_avistamiento, m.fecha AS fecha_muerte
FROM technicaltest.titanes t
INNER JOIN avistamientos a ON t.id = a.id_titan
INNER JOIN muertes m ON t.id = m.id_titan
WHERE t.id in (select id_titan from muertes) and a.fecha IS NULL OR m.fecha IS NULL OR a.fecha > m.fecha
ORDER BY t.id ASC;

/*8.	Extra: teoriza (no más de 1 párrafo) por qué podrían generarse estas incongruencias */

Existe la posibilidad de que estos titanes que se registraron muertos, 
puedan haber sido humanos-titan y solo transitaron 
el estado de recuperacion.
