<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE HTML>

<html>
<head>
    <meta charset="ISO-8859-1">
    <title><tiles:insertAttribute name="title" ignore="true"/></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="<c:url value="/resources/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/resources/css/signin.css"/>" rel="stylesheet">
</head>
<body>
<div class="container">

    <form class="form-signin" role="form" action="glemtPassord">
        <div class="form-group">
            <h2 class="form-signin-heading" id="header">Glemt Passord</h2>
            <input type="text" class="form-control" placeholder="Email" required autofocus>
        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Send Passord</button>
        <a href="<c:url value="login.htm"/>">
            Tilbake
        </a>
    </form>
</div>

<script src="<c:url value="/resources/js/jquery-1.10.2.js"/>"></script>
<script src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
</body>
</html>