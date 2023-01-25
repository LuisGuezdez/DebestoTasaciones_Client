-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-01-2023 a las 17:20:48
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `debesto_tasaciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coche`
--

CREATE TABLE `coche` (
  `id` bigint(20) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `anyo` year(4) NOT NULL,
  `kms` int(11) NOT NULL,
  `combustible` varchar(255) NOT NULL,
  `id_usuario` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `coche`
--

INSERT INTO `coche` (`id`, `marca`, `modelo`, `anyo`, `kms`, `combustible`, `id_usuario`) VALUES
(5, 'opel', 'astra', 2000, 100000, 'gasolina', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id` bigint(20) NOT NULL,
  `fecha` date NOT NULL,
  `precio` int(11) NOT NULL,
  `id_usuario` bigint(20) NOT NULL,
  `id_coche` bigint(20) NOT NULL,
  `id_sucursal` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `localidad` varchar(255) DEFAULT NULL,
  `calle` varchar(255) DEFAULT NULL,
  `postal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id`, `nombre`, `localidad`, `calle`, `postal`) VALUES
(1, 'Debesto-Alfafar', 'Alfafar', 'Avda. Mediterraneo', 46910),
(2, 'Debesto-Ruzafa', 'Ruzafa', 'literato Azorin', 46007),
(3, 'sin sucursal', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasacion`
--

CREATE TABLE `tasacion` (
  `id` bigint(20) NOT NULL,
  `reserva` datetime NOT NULL,
  `asignado` tinyint(1) DEFAULT NULL,
  `valorcoche` int(11) DEFAULT NULL,
  `id_coche` bigint(20) NOT NULL,
  `id_sucursal` bigint(20) NOT NULL,
  `id_usuario` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE `tipousuario` (
  `id` bigint(20) NOT NULL,
  `tipo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`id`, `tipo`) VALUES
(1, 'empleado'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `id_tipousuario` tinyint(2) NOT NULL,
  `id_sucursal` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellidos`, `email`, `username`, `contraseña`, `id_tipousuario`, `id_sucursal`) VALUES
(1, 'Manolo', 'Panadero Falcon', 'manpan@correo.com', 'manolo', 'empleado', 1, 1),
(2, 'Luis', 'Rodriguez Fernandez', 'rodfer@gmail.com', 'luis', 'empleado', 1, 1),
(3, 'Estefania', 'Laenos Boriko', 'laebor@correo.com', 'fani', 'empleado', 1, 2),
(4, 'Debora', 'Ido Laenos', 'idolae@correo.com', 'debora', 'empleado', 1, 2),
(5, 'Ingrid', 'Ido Laenos', 'laeido@correo.com', 'ingrid', 'cliente', 2, 3),
(6, 'Maria del Pilar', 'Boriko Laenos', 'konos@correo.com', 'meriPompis', 'cliente', 2, 3),
(7, 'Pilar', 'Laenos Mame', 'melae@correo.com', 'melae', 'cliente', 2, 3),
(8, 'Lia', 'Rodriguez Fernandez', 'drinan@correo.com', 'lianta', 'cliente', 2, 3),
(12, 'hola', 'caracola', 'hola@prueba.com', 'maquinon', 'password', 1, 1),
(14, 'laura', 'romero amador', 'laro@debesto.com', 'laro', 'password', 1, 2),
(15, 'aaron', 'amador tatay', 'aaam@debesto.com', 'aaam', 'password', 1, 2),
(16, 'miguel', 'torres jimenez', 'mito@debesto.com', 'mito', 'password', 2, 3),
(17, 'aaron', 'romero jimenez', 'aaro@debesto.com', 'aaro', 'password', 1, 1),
(18, 'laura', 'garcía coronado', 'laga@debesto.com', 'laga', 'password', 1, 1),
(19, 'enrique', 'sanchis navarro', 'ensa@debesto.com', 'ensa', 'password', 2, 3),
(27, 'hola', 'carrasco', 'hola@prueba.com', 'caracola', 'password', 2, 1),
(28, 'hola', 'caracola', 'hola@prueba.com', 'lkjahldfsl', 'password', 2, 1),
(29, 'hola', 'caracola', 'hola@prueba.com', 'manteco', 'password', 1, 1),
(30, 'manuel', 'caracola', 'hola@prueba.com', 'machinote', 'password', 2, 1),
(31, 'manuel', 'caracola', 'hola@prueba.com', 'caracolah', 'password', 2, 3),
(32, 'peret', 'sanchis martinez', 'pesa@debesto.com', 'pesa', 'password', 1, 1),
(33, 'luis', 'frejo amador', 'lufr@debesto.com', 'lufr', 'password', 2, 3),
(34, 'lionel', 'tatay amador', 'lita@debesto.com', 'lita', 'password', 2, 3),
(35, 'lionel', 'santiago ortega', 'lisa@debesto.com', 'lisa', 'password', 2, 3),
(36, 'daniel', 'gil arias', 'dagi@debesto.com', 'dagi', 'password', 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coche`
--
ALTER TABLE `coche`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tasacion`
--
ALTER TABLE `tasacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `coche`
--
ALTER TABLE `coche`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tasacion`
--
ALTER TABLE `tasacion`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
