drop database if exists spring_boot;
create database spring_boot;
use spring_boot;

create table login(
	id int primary key,
	name varchar(30),
	password varchar(30)
);

insert into login values (1000, "abhi", "abhi");
insert into login values (1001, "chaitu", "chaitu");

create table todo(
	id int primary key auto_increment,
	message varchar(30),
	name varchar(30)
);
commit;
select * from login;

