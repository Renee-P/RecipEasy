-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2024 at 02:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipeasy`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'admin@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', '2024-12-15 11:11:18'),
(2, '22104214@usc.edu.ph', 'a0670a0fd3b5c9ae86b9186fac1543e3ceef4a103e5d4efb9db38787c3a9c1d1', '2024-12-16 03:11:18'),
(3, 'johnquirante@gmail.com', '96d9632f363564cc3032521409cf22a852f2032eec099ed5967c0d000cec607a', '2024-12-14 03:11:18');

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text DEFAULT NULL,
  `ingredients` text DEFAULT NULL,
  `dietary_restrictions` text DEFAULT NULL,
  `recipe_type` varchar(255) DEFAULT NULL,
  `instructions` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `image`, `ingredients`, `dietary_restrictions`, `recipe_type`, `instructions`, `created_at`) VALUES
(1, 'Vegetarian Lasagna', 'https://i.pinimg.com/736x/e8/56/e5/e856e58e65335b060e8988defc198c26.jpg', 'Lasagna noodles, ricotta cheese, spinach, marinara sauce, mozzarella cheese', 'Vegetarian', 'Main', 'Layer noodles, cheese, spinach, and sauce. Bake at 375°F for 40 minutes.', '2024-12-15 17:36:12'),
(2, 'Vegetable Stir Fry', 'https://i.pinimg.com/736x/71/fb/18/71fb1870d8f8427af2ea9bee95548a40.jpg', 'Broccoli, carrots, bell peppers, soy sauce, garlic, sesame oil', 'Vegetarian', 'Side', 'Stir fry vegetables in sesame oil and garlic. Add soy sauce. Serve over rice.', '2024-12-15 17:36:12'),
(3, 'Greek Salad', 'https://i.pinimg.com/736x/c0/66/6e/c0666e81294bdbd90a62f2a19084d6ff.jpg', 'Lettuce, tomatoes, cucumbers, feta cheese, olives, olive oil, lemon juice', 'Vegetarian', 'Appetizer', 'Mix all ingredients in a bowl. Toss with olive oil and lemon juice.', '2024-12-15 17:36:12'),
(4, 'Vegan Burrito Bowl', 'https://i.pinimg.com/736x/49/7c/4b/497c4be5955625a47429a26065a00294.jpg', 'Rice, black beans, corn, avocado, salsa, lime juice', 'Vegan', 'Main', 'Combine all ingredients in a bowl. Drizzle with lime juice.', '2024-12-15 17:36:12'),
(5, 'Lentil Soup', 'https://i.pinimg.com/474x/ce/cf/4a/cecf4aa02e5e4006e1fe400bd5488111.jpg', 'Lentils, carrots, celery, onion, vegetable broth, garlic, thyme', 'Vegan', 'Soup', 'Simmer lentils and vegetables in broth with garlic and thyme for 30 minutes.', '2024-12-15 17:36:12'),
(6, 'Chickpea Salad Sandwich', 'https://i.pinimg.com/736x/ef/91/03/ef910359c1edfcb8b9018cd2bea19456.jpg', 'Chickpeas, vegan mayo, celery, mustard, bread', 'Vegan', 'Snack', 'Mash chickpeas with mayo and mustard. Add celery. Serve on bread.', '2024-12-15 17:36:12'),
(7, 'Quinoa Salad', 'https://i.pinimg.com/736x/fa/86/81/fa8681213c9d7811f62eba0f6260f810.jpg', 'Quinoa, cherry tomatoes, cucumber, parsley, lemon juice, olive oil', 'Gluten-Free', 'Side', 'Cook quinoa. Toss with vegetables, olive oil, and lemon juice.', '2024-12-15 17:36:12'),
(8, 'Grilled Chicken with Vegetables', 'https://i.pinimg.com/736x/64/17/fd/6417fddd196173a31d72f4a749f076c8.jpg', 'Chicken breast, zucchini, bell peppers, olive oil, herbs', 'Gluten-Free', 'Main', 'Grill chicken and vegetables with olive oil and herbs.', '2024-12-15 17:36:12'),
(9, 'Chocolate Almond Flour Brownies', 'https://i.pinimg.com/474x/6c/1b/7e/6c1b7e13ee5442e4a510dda1aa22ac2c.jpg', 'Almond flour, cocoa powder, eggs, honey, dark chocolate', 'Gluten-Free', 'Dessert', 'Mix ingredients. Bake at 350°F for 25 minutes.', '2024-12-15 17:36:12'),
(10, 'Coconut Curry', 'https://i.pinimg.com/474x/d4/93/68/d49368fb6d5a39c467ac37eb472c7af1.jpg', 'Coconut milk, chicken, curry powder, carrots, onions, rice', 'Dairy-Free', 'Main', 'Cook chicken with curry powder. Add coconut milk and vegetables. Serve over rice.', '2024-12-15 17:36:12'),
(11, 'Avocado Toast', 'https://i.pinimg.com/736x/8e/6b/fe/8e6bfef1c4a17d84b3e71b06a5fca678.jpg', 'Bread, avocado, lemon juice, chili flakes', 'Dairy-Free', 'Snack', 'Toast bread. Spread mashed avocado. Add lemon juice and chili flakes.', '2024-12-15 17:36:12'),
(12, 'Fruit Sorbet', 'https://i.pinimg.com/736x/5f/a2/74/5fa274e2314fd57fe9ef9c09bc2ebff4.jpg', 'Frozen mango, frozen pineapple, lime juice', 'Dairy-Free', 'Dessert', 'Blend all ingredients until smooth. Freeze for 2 hours.', '2024-12-15 17:36:12'),
(13, 'Spaghetti Bolognese', 'https://i.pinimg.com/736x/3a/87/8c/3a878ce9056a656e78a144625780cfb6.jpg', 'Spaghetti, ground beef, tomato sauce, onions, garlic, basil', 'Nut-Free', 'Main', 'Cook spaghetti. Simmer sauce with beef and seasonings. Combine and serve.', '2024-12-15 17:36:12'),
(14, 'Roast Chicken', 'https://i.pinimg.com/736x/37/d2/4d/37d24df750d82de891821b7f319cde97.jpg', 'Whole chicken, olive oil, rosemary, potatoes, carrots', 'Nut-Free', 'Main', 'Roast chicken with olive oil, rosemary, and vegetables at 375°F for 90 minutes.', '2024-12-15 17:36:12'),
(15, 'Banana Pancakes', 'https://i.pinimg.com/474x/79/78/27/7978274760ff598fea16b5a010c9e0ac.jpg', 'Bananas, eggs, flour, milk, vanilla extract', 'Nut-Free', 'Breakfast', 'Mash bananas. Mix with other ingredients. Cook on skillet.', '2024-12-15 17:36:12'),
(16, 'Pineapple Fried Rice', 'https://i.pinimg.com/474x/b0/1c/bb/b01cbb295da3fd4d5d8ee884dcac9514.jpg', 'Rice, pineapple, shrimp, soy sauce, cashews, green onions', 'Pescetarian', 'Main', 'Stir fry rice with pineapple, shrimp, soy sauce, and cashews.', '2024-12-15 17:36:12'),
(17, 'Mushroom Risotto', 'https://i.pinimg.com/474x/60/0e/15/600e1534a8244ce1ad3df4d92d185daf.jpg', 'Arborio rice, mushrooms, chicken stock, parmesan cheese, white wine', NULL, 'Main', 'Cook rice slowly in stock, adding mushrooms and wine. Stir until creamy.', '2024-12-15 17:36:12'),
(18, 'Classic Pancakes', 'https://i.pinimg.com/474x/7a/32/b0/7a32b0ad41fdecdc567a29815c0c51b6.jpg', 'Flour, eggs, milk, sugar, butter, syrup', NULL, 'Breakfast', 'Mix ingredients. Cook on skillet until golden.', '2024-12-15 17:36:12'),
(19, 'Beef Stew', 'https://i.pinimg.com/474x/1a/1f/e7/1a1fe783f139957ee4a06533a4d10976.jpg', 'Beef, potatoes, carrots, onions, beef stock, thyme', NULL, 'Dinner', 'Simmer beef and vegetables in stock with thyme for 2 hours.', '2024-12-15 17:36:12'),
(20, 'Chicken Caesar Salad', 'https://i.pinimg.com/736x/07/b3/fa/07b3fa5f80454a92f323140a4504ad23.jpg', 'Chicken Breast, Lettuce, Tomatoes, Cucumber, Olive Oil', 'Gluten-Free', 'Salad', 'Grill chicken, mix with salad ingredients, and serve.', '2024-12-15 16:36:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`email`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
