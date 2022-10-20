-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 23 Lut 2022, 00:45
-- Wersja serwera: 10.4.18-MariaDB
-- Wersja PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `pszczelarze`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `posts`
--

INSERT INTO `posts` (`id`, `title`, `desc`, `date`) VALUES
(1, 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu nunc vitae lectus convallis convallis non nec lectus. Aliquam fermentum magna lectus, non fermentum lorem aliquam ac. Vivamus tincidunt sapien eu diam congue, sed rutrum est imperdiet. Praesent quis erat nec lectus semper dapibus. Nulla cursus sed sapien eget molestie. In accumsan dui non odio scelerisque egestas. Curabitur quis ante a libero tincidunt mollis et quis libero. Maecenas nec nunc tristique, luctus odio tristique, mollis erat. Aenean ut vestibulum velit. Curabitur laoreet eros eget lacus tempus, sit amet viverra ante pulvinar. Donec fermentum porttitor tempus.', '0000-00-00'),
(2, 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu nunc vitae lectus convallis convallis non nec lectus. Aliquam fermentum magna lectus, non fermentum lorem aliquam ac. Vivamus tincidunt sapien eu diam congue, sed rutrum est imperdiet. Praesent quis erat nec lectus semper dapibus. Nulla cursus sed sapien eget molestie. In accumsan dui non odio scelerisque egestas. Curabitur quis ante a libero tincidunt mollis et quis libero. Maecenas nec nunc tristique, luctus odio tristique, mollis erat. Aenean ut vestibulum velit. Curabitur laoreet eros eget lacus tempus, sit amet viverra ante pulvinar. Donec fermentum porttitor tempus.', '2022-02-23');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_num` char(1) DEFAULT '0',
  `creation_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`username`, `password`, `role_num`, `creation_date`) VALUES
('admin', 'admin', '1', '2022-02-12 12:10:41'),
('plewamarcin', 'c380f833034d60bf035a134094eb538d600dc6f9', '0', '2022-02-22 23:53:34');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
