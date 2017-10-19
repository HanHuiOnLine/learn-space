##ubuntu环境
###1.准备LAMP环境
LAMP 是 Linux、Apache、MySQL 和 PHP 的缩写，是 Wordpress 系统依赖的基础运行环境。我们先来准备 LAMP 环境
(1)安装apache2
在终端输入该命令 ，使用 apt-get 安装 Apache2：
(2)安装PHP组件
apt-get 里有 php7.0 ，所以我们可以直接安装 php7.0 ：
sudo apt-get install php7.0 -y
安装 php 相关组件：
sudo apt-get install libapache2-mod-php7.0
(3)安装 MySQL 服务
安装 MySQL 过程中，控制台会提示您输入 MySQL 的密码，您需要输入两次密码，并记住您输入的密码，后续步骤需要用到：
sudo apt-get install mysql-server -y
(4)安装 php MySQL相关组件：
sudo apt-get install php7.0-mysql
(5)安装 phpmyadmin
使用 apt-get 安装 phpmyadmin，安装过程中，您需要根据提示选择 apache2 ，再输入root密码 和数据库密码：
sudo apt-get install phpmyadmin -y
(6)建立 /var/www/html 下的软连接：
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
(7)重启 MySQL 服务
sudo service mysql restart
(8)重启 Apache 服务：
sudo systemctl restart apache2.service

###2.安装配置wordpress
(1)我们需要下载一个 Wordpress 压缩包
wget https://cn.wordpress.org/wordpress-4.7.4-zh_CN.zip
(2)下载完成后，解压这个压缩包
sudo unzip wordpress-4.7.4-zh_CN.zip
(3)解压完后，就能在 Wordpress 文件夹里看到 Wordpress 的源码了
(4)为 wordpress 配置一个数据库
进入 mysql，输入以下代码后，按提示输入您MySQL密码:
mysql -u root -p
为 wordpress 创建一个叫 wordpress 的数据库：
CREATE DATABASE wordpress;
为 这个数据库设置一个用户为 wordpressuser：
CREATE USER wordpressuser;
为这个用户配置一个密码为 password123：
SET PASSWORD FOR wordpressuser= PASSWORD("password123");
为这个用户配置数据库的访问权限：
GRANT ALL PRIVILEGES ON wordpress.* TO wordpressuser IDENTIFIED BY"password123";
生效这些配置
FLUSH PRIVILEGES;
然后退出 mysql
exit;
(5)配置wordpress
由于PHP默认访问 /var/www/html/ 文件夹，所以我们需要把 wordpress 文件夹里的文件都复制到 /var/www/html/ 文件夹
sudo mv wordpress/* /var/www/html/
修改一下 /var/www/html/ 目录权限：
sudo chmod -R 777 /var/www/html/
将apache指定到index.html
sudo mv /var/www/html/index.html /var/www/html/index~.html
重启 Apache 服务：
sudo systemctl restart apache2.service
###3.测试访问
访问127.0.0.1访问

###4.准备域名和解析
没有需要购买
(2)域名解析
域名购买完成后, 需要将域名解析到服务器上，
域名设置解析后需要过一段时间才会生效，通过 ping 命令检查域名是否生效
ping www.yourdomain.com
如果 ping 命令返回的信息中含有你设置的解析的 IP 地址，说明解析成功。



