drop database if exists spring_boot;
create database spring_boot;
use spring_boot;

create table login(
	id int primary key,
	name varchar(30),
	passoword varchar(30)
);

commit;
select * from login;

