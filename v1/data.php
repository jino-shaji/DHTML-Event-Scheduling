<?php
	require_once('./lib/dhtmlxScheduler/connector/scheduler_connector.php');
	include ('./config.php');

	$roomtypes = new JSONOptionsConnector($res, $dbtype);
	$roomtypes->render_table("room_types","id","id(value),name(label)");
	
	$roomstatuses = new JSONOptionsConnector($res, $dbtype);
	$roomstatuses->render_table("room_statuses","id","id(value),name(label)");

	$bookingstatuses = new JSONOptionsConnector($res, $dbtype);
	$bookingstatuses->render_table("booking_statuses","id","id(value),name(label)");

	$rooms = new JSONOptionsConnector($res, $dbtype);
	$rooms->render_table("rooms","id","id(value),label(label),type(type),status(status)");

	$scheduler = new JSONSchedulerConnector($res, $dbtype);

	$scheduler->set_options("roomType", $roomtypes);
	$scheduler->set_options("roomStatus", $roomstatuses);
	$scheduler->set_options("bookingStatus", $bookingstatuses);
	$scheduler->set_options("room", $rooms);

	$scheduler->render_table("bookings","id","start_date,end_date,text,room,status,is_paid");
?>


