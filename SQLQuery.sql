
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
insert into Category values('CAT001','Laptop',N'Có Hàng mới')
insert into Category values('CAT002','PC',N'Có Hàng mới')

create table Orders
(
	id int identity primary key,
	code nvarchar(10),
	email nvarchar(40),
	userId int,
	address nvarchar(100),
	date date,
	total int,
	status int
)
insert into Orders values('OR001','pvhuybao@gmail.com',1,N'3 Truong Sa','11-11-2018',13000000,1)

create table OrderDetail
(
	id int identity primary key,
	idOrder int,
	code nvarchar(20),
	idProduct int,
	nameProduct nvarchar(30),
	quantity int,
	price int,
	totalPrice int,
)
insert into OrderDetail values(1,'ORDT001',1,N'Macbook pro 2017',1,13000000,13000000)

create table Product
(
	id int identity primary key,
	code nvarchar(20),
	name nvarchar(30),
	description nvarchar(40),	
	detail text,
	idCategory int,
	price int,
	salePrice int,
	quantity int,
	image text,	
	discount int
)
insert into Product values('PRO001',N'Macbook pro 2017',N'Hàng cũ',N'RAM 8GG / Core i5 2.3GHZ',1,17000000,16000000,14,N'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05648858.png',3)
insert into Product values('PRO002',N'Asus asqweqw',N'Hàng cũ',N'RAM 8GG / Core i5 2.3GHZ',1,18000000,14200000,14,N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZWSAefCfbWXuDgUm7kXzF_NkcYH0k5g8dgqgVFCCWaLwAMXVww',3)

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
	vip int,
	point bigint
)
insert into Users values('USR001','pvhuybao','123456','Huy','Bao','Nam','pvhuybao@gmail.com','0932163557',10,0)
insert into Users values('USR002','admin','admin','Mr','Administrator','Nam','pvhuybao@gmail.com','0932163557',10,0)
insert into Users values('USR003','pvhuybao123','123','Bao','Huy','Nam','pvhuybao@gmail.com','0932163557',4,0)

create table ImportBill
(
	id int identity primary key,
	code nvarchar(10),
	agencyName nvarchar(40),
	address nvarchar(100),
	phone nvarchar(20),
	date date,
	total int,	
)
insert into ImportBill values('IMT001',N'Phong Vũ',N'1 CMT8','0932156671','11-11-2018',12000000)

create table ImportBillDetail
(
	id int identity primary key,
	idBill int,
	code nvarchar(20),
	idProduct int,
	nameProduct nvarchar(30),
	quantity int,
	price int,
	totalPrice int,
)
insert into ImportBillDetail values(1,'IMTDT001',1,N'Macbook pro 2017',1,12000000,12000000)









insert into Category values ('CAT001','Laptop','');

insert into Category values ('CAT002',N'Điện thoại','');

insert into Category values ('CAT003',N'Máy bộ','');

insert into Category values ('CAT004','Tablet','');

insert into Category values ('CAT005',N'Phụ kiện','');

insert into Category values ('CAT006',N'Đồng hồ thông minh','');







insert into Product values ('PRO001','Laptop Dell Inspiron 5570','','i5/8250U/4GB/1TB/2GB/M530/Win10/(M5I5238W)',1,17000000,17000000,10,N'https://cdn.tgdd.vn/Products/Images/44/155738/dell-inspiron-5570-i5-8250u-m5i5238w-dai-dien-600x600.jpg',0);

insert into Product values ('PRO002','Laptop Dell Inspiron 5379','','i7 8550U/8GB/1TB/Win10/Office365/(C3TI7501W)',1,24500000,24500000,10,N'https://cdn.tgdd.vn/Products/Images/44/155735/dell-inspiron-5379-i7-8550u-c3ti7501w-fix-dmx-600x600.jpg',0);


insert into Product values ('PRO003','Laptop Asus VivoBook X441UA','','i3 6100U/4GB/1TB/Win10/(WX027T)',1,9000000,9000000,10,N'https://cdn.tgdd.vn/Products/Images/44/158560/asus-x441ua-i3-6100u-wx027t-450-300-600x600.png',0);

insert into Product values ('PRO004','Laptop HP 15 da0055TU','','i3 7020U/4GB/1TB/Win10/(4NA89PA)',1,10000000,10000000,10,N'https://cdn.tgdd.vn/Products/Images/44/182740/hp-15-da0055tu-4na89pa-600x600.jpg',0);

insert into Product values ('PRO005','Laptop HP 15 da0036TX','','i7 8550U/4GB/1TB/2G MX130/Win10/(4ME78PA)',1,17000000,17000000,10,N'https://cdn.tgdd.vn/Products/Images/44/181322/hp-15-da0036tx-4me78pa-cava-600x600.jpg',0);



insert into Product values ('PRO006',N'Điện thoại Samsung Galaxy J8','','Super AMOLED 6.0 inch/Android 8.0/16MP/16MP/Qualcomm Snapdragon 450 64bit/3GB/32GB',2,8000000,8000000,10,N'https://cdn.tgdd.vn/Products/Images/42/153830/samsung-galaxy-j8-400x460.png',0);

insert into Product values ('PRO008',N'Điện thoại Samsung Galaxy S9+ 64GB','','Super AMOLED 6.2 inch/Android 8.0/12MP/8MP/Exynos 9810 64bit/6GB/64GB',2,21000000,21000000,10,N'https://cdn.tgdd.vn/Products/Images/42/147939/samsung-galaxy-s9-plus-64gb-xanh-san-ho-2-400x460.png',0);

insert into Product values ('PRO007',N'Điện thoại iPhone Xs Max 512GB','','OLED 6.5 inch/iOS 12/12MP/7MP/Apple A12 Bionic/4GB/512GB',2,43000000,43000000,10,N'https://cdn.tgdd.vn/Products/Images/42/191482/iphone-xs-max-512gb-gold-400x460.png',0);

insert into Product values ('PRO011',N'Điện thoại iPhone X 64GB Gray','','OLED 5.8 inch/iOS 12/12MP/7MP/Apple A11 Bionic/3GB/64GB',2,24000000,24000000,10,N'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',0);

insert into Product values ('PRO012',N'Điện thoại Xiaomi Mi 8','','Super AMOLED 6.2 inch/Android 8.1/12MP/20MP/Snapdragon 845/6GB/64GB',2,13000000,13000000,10,N'https://cdn.tgdd.vn/Products/Images/42/167539/xiaomi-mi-8-1-400x460-400x460.png',0);


insert into Product values ('PRO013','GVN Thor 1060','','MAIN GIGABYTE B360 AORUS GAMING 3 LGA1151V2/CPU INTEL Core i3 8100 4C4T 6M 3.6GHz/RAM KINGSTON HyperX Fury 8Gb 2666MHz/VGA GIGABYTE GeForce GTX 1060 G1 Gaming GDDR5/HDD Seagate Barracuda 1TB 7200rpm/SSD GIGABYTE 120GB Sata3/PSU ANDYSON M5+ 550W 80Plus Bronze/Case XIGMATEK VENOM/Optane Intel Optane Memory 32GB M.2 NVMe',3,22000000,22000000,10,N'https://product.hstatic.net/1000026716/product/gvnthor_1060_6gb.jpg',0);

insert into Product values ('PRO014','GVN Venus 1060','','Mainboard MSI B450M Bazooka plus AM4/CPU AMD Ryzen 5 2600/6 nhân 12 luồng AM4/RAM KINGSTON HyperX Fury 8Gb 2666MHz/VGA MSI GTX 1060 GAMING X 6G GDDR5/SSD PNY CS900 2.5 SATA III 120GB/PSU COOLER MASTER MWE500 80 Plus/Case Xigmatek Mystic 9 Mid-tower',3,21950000,21950000,10,N'https://product.hstatic.net/1000026716/product/pcgvn_venus1060.jpg',0);

insert into Product values ('PRO015','GVN Hades 2070','','Mainboard  MSI B360M BAZOOKA PLUS LGA 1151v2/CPU INTEL Core i5 8400 6C6T 9M 2.8 GHz/RAM GSKILL TridentZ RGB 2x8GB 3000Mhz/VGA MSI GeForce RTX 2070 GAMING Z 8G/SSD SAMSUNG SSD 860 EVO 250GB/PSU SEASONIC 750W M12II Bronze Evo Edition/Case Case CORSAIR 275R (Mid-Tower)/Cooling DEEPCOOL GammaxxGT',3,40360000,40360000,10,N'https://product.hstatic.net/1000026716/product/gvn_hades_rtx_2070_bed086d9b1494a36972c0a95a8c705c6.jpg',0);

insert into Product values ('PRO016',N'Máy tính bảng Samsung Galaxy Tab A 10.5 inch','',N'Màn hình: IPS LCD, Hệ điều hành: Android 8.0, CPU 8 nhân 1.8hz, RAM 3GB, Bộ nhớ 32 GB',4,9500000,9500000,10,N'https://cdn.tgdd.vn/Products/Images/522/184380/samsung-galaxy-tab-a-105-inch-chitietblue-400x460.png',0);

insert into Product values ('PRO017',N'Máy tính bảng iPad Pro 10.5 inch Wifi 64GB (2017)','',N'Màn hình IPS LCD,Hệ điều hành: iOS 11, CPU Apple A10X 6 nhân 64 bit,RAM 4GB, Bộ nhớ 64GB',4,16900000,16900000,10,N'https://cdn.tgdd.vn/Products/Images/522/106036/ipad-pro-105-inch-wifi-64gb-2017-400-400x460.png',0);

insert into Product values ('PRO018',N'Máy tính bảng Samsung Galaxy Tab A6 10.1 Spen','',N'Màn hình TFT LCD, Hệ điều hành Android 6.0, CPU Exynos 7870 8 nhân 1.6 GHz, RAM 3GB, Bộ nhớ 16GB',4,7500000,7500000,10,N'https://cdn.tgdd.vn/Products/Images/522/87306/samsung-galaxy-tab-a6-101-spen-400x460.png',0);

insert into Product values ('PRO019',N'Máy tính bảng Huawei MediaPad T3 8.0 (2017)','',N'Màn hình LCD , Hệ điều hành Android 7.0,CPU Qualcomm MSM8917, RAM 2GB, Bộ nhớ 16GB',4,3500000,3500000,10,N'https://cdn.tgdd.vn/Products/Images/522/110578/huawei-mediapad-t3-80-400-400x460.png',0);

insert into Product values ('PRO020',N'Dây cáp Lightning 2 m eValu LTL-04','',N'iPhone(lighting),Truyền dữ liệu/Sạc,2.1A,2m,Xuất xứ :Trung Quốc',5,80000,80000,10,N'https://cdn.tgdd.vn/Products/Images/58/89730/cap-lightning-2m-evalu-ltl-04-xanh-navi-avatar-1-600x600.jpg',0);

insert into Product values ('PRO021',N'Tai nghe Bluetooth Roman R553N Đen','',N'Đầu sạc MicroUSB,Không dây,Mic thoại,Nghe/Nhận cuộc gọi,Phát,dừng chơi nhạc,Tai nghe,Dây cáp Micro USB,Xuất xứ:Trung Quốc',5,185000,185000,10,N'https://cdn.tgdd.vn/Products/Images/54/143401/tai-nghe-bluetooth-roman-r553n-den-ava-600x600.jpg',0);

insert into Product values ('PRO022',N'Pin sạc dự phòng 5000mah eSaver Safari 2S','',N'Hiệu suất sạc 60%, Nguồn vào 5V - 2A,Pin Li-Ion,Trọng lượng 200g,Dài 9.5cm,Ngang 4.8 cm, Dày 2cm',5,150000,150000,10,N'https://cdn.tgdd.vn/Products/Images/57/145724/pin-sac-du-phong-5000mah-esaver-safari-2s-anh-dai-dien-600x600.jpg',0);

insert into Product values ('PRO023',N'Adapter sạc 2 cổng 2.4A Xmobile DS132-TB','',N'Jack cắm USB, Dòng sạc tối đa: 2 cổng/4A,Xuất xứ:Trung Quốc',5,120000,120000,10,N'https://cdn.tgdd.vn/Products/Images/58/88849/adapter-sac-xmobile-ds132-tb-2-cong-ava-600x600.jpg',0);

insert into Product values ('PRO024',N'Apple Watch S1, 42mm viền nhôm, dây cao su màu đen','',N'Công nghệ: OLED cảm ứng, Kích thước màn hình: 2.1 inch, Hệ điều hành: iOS 9.0,Kết nối:Wifi/bluetooth',6,9000000,9000000,10,N'https://cdn.tgdd.vn/Products/Images/7077/74701/apple-watch-edition-42mm-124-330x330-330x330.png',0);

insert into Product values ('PRO025',N'Đồng hồ thông minh Samsung Gear S3 Frontier','',N'Công nghệ:AMOLED,Kích thước màn hình: 1.3 inch,Hệ điều hành: Android/iOS,Kết nối:Wifi/Bluetooth',6,6940000,6940000,10,N'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-lte-400x460.png',0);

insert into Product values ('PRO026',N'Đồng hồ thông minh Xiaomi Amazfit Pace GPS Đen','',N'Công nghệ: Transflective LCD, Kích thước màn hình: 1.34 inch, Hệ điều hành: Android/iOS,Kết nối: Wifi/Bluetooth',6,3400000,3400000,10,N'https://cdn.tgdd.vn/Products/Images/7077/152584/xiaomi-amazfit-pace-gps-den-nt-600x600.jpg',0);
