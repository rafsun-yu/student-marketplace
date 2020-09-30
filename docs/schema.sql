-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2020 at 06:15 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_marketplace`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `buyers`
--

CREATE TABLE `buyers` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `image_url` varchar(100) NOT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `featurer` int(11) DEFAULT NULL,
  `approver` int(11) DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `user_id` int(11) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `buyer_id` int(11) DEFAULT NULL,
  `creation_time` datetime DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sellers`
--

CREATE TABLE `sellers` (
  `id` int(11) NOT NULL,
  `approver` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone_no` varchar(11) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buyers`
--
ALTER TABLE `buyers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `featurer` (`featurer`),
  ADD KEY `approver` (`approver`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `buyer_id` (`buyer_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sellers_ibfk_2` (`approver`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `buyers`
--
ALTER TABLE `buyers`
  ADD CONSTRAINT `buyers_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`featurer`) REFERENCES `admins` (`id`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`approver`) REFERENCES `admins` (`id`),
  ADD CONSTRAINT `items_ibfk_3` FOREIGN KEY (`seller_id`) REFERENCES `sellers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `sellers`
--
ALTER TABLE `sellers`
  ADD CONSTRAINT `sellers_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
