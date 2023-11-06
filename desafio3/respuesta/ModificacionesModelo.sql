/*  se crea una tabla nueva para el detalle de los asesinos de titanes */
create table if not exists `assassins` (
  `id` int(11) not null auto_increment,
  `nombre` varchar(255) not null,
  primary key (`id`)
);
/* se modifican las tablas avistamiento, movimientos y muertes para incluir el id del asesino  */
alter table `avistamientos`
  add column `id_assassins` int(11) not null,
  add column `momento` datetime not null,
  add constraint `avistamiento_id_assassins` foreign key (`id_assassins`) references `assassins` (`id`) on delete restrict on update cascade;


alter table `movimientos`
  add column `id_assassins` int(11) not null,
  add column `momento` datetime not null,
  add constraint `movimiento_id_assassins` foreign key (`id_assassins`) references `assassins` (`id`) on delete restrict on update cascade;

alter table `muertes`
  add column `id_assassins` int(11) not null,
  add column `momento` datetime not null,
  add column `id_ejecutor` INT(11) NULL,
  add constraint `muerte_id_ejecutor` foreign key (`id_ejecutor`) references `assassins` (`id`) on delete restrict on update cascade;
