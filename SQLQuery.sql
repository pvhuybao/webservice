
use master
drop database WebShop

create database WebShop
use WebShop

create table Category
(
	id int identity primary key,
	code nvarchar(10),
	name nvarchar(30),
	description nvarchar(50)
)

create table Orders
(
	id int identity primary key,
	code nvarchar(10),
	email nvarchar(40),
	userId int,
	address nvarchar(100),
	total int,
	status int
)

create table OrderDetail
(
	id int identity primary key,
	code nvarchar(20),
	idProduct int,
	quantity int,
	price int,
	totalPrice int,
)

create table Product
(
	id int identity primary key,
	code nvarchar(20),
	name nvarchar(30),
	description nvarchar(40),	
	detail text,
	idCategory int,
	price int,
	quantity int,
	image nvarchar(50),	
	discount int
)

create table Users
(
	id int identity primary key,
	code nvarchar(20),
	username nvarchar(20),
	password nvarchar(20),
	firstName nvarchar(20),
	lastName nvarchar(20),
	gender nvarchar(20),
	email nvarchar(20),
	phone nvarchar(20),
)

create table ImportBill
(
	id int identity primary key,
	code nvarchar(10),
	agencyName nvarchar(40),
	address nvarchar(100),
	phone nvarchar(20),
	total int,	
)

create table ImportBillDetail
(
	id int identity primary key,
	code nvarchar(20),
	idProduct int,
	quantity int,
	price int,
	totalPrice int,
)

insert into Category values('CAT001','Laptop',N'Có Hàng mới')

insert into Product values('PRO001',N'Macbook pro 2017',N'Hàng cũ',N'RAM 8GG / Core i5 2.3GHZ',1,17000000,14,N'',3)

insert into Orders values('OR001','pvhuybao@gmail.com',1,N'3 Truong Sa',0,1)

insert into OrderDetail values('ORDT001',1,1,1000000,1000000)

insert into Users values('USR001','pvhuybao','123456','Huy','Bao','Nam','pvhuybao@gmail.com','0932163557')

insert into ImportBill values('IMT001',N'Phong Vũ',N'1 CMT8','0932156671',0)

insert into ImportBillDetail values('IMTDT001',1,1,1000000,1000000)