<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <%@ page isELIgnored="false" %>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Venekanta - Lista veneistä</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
</head>
<body>
<div class="container">
    <div class="col-md-12 mt-3">
        <h2>Venekanta</h2>
        <hr/>
        <input type="button" value="Lisää vene"
               onclick="window.location.href='new'; return false;"
               class="btn btn-primary"/>
        <br/><br/>

        <div class="card">
            <div class="card-body table-responsive">
                <h5 class="card-title">Veneet</h5>
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Merkki ja malli</th>
                        <th>Pituus</th>
                        <th>Leveys</th>
                        <th>Hinta</th>
                        <th>Toiminnot</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach var="boat" items="${boats}">
                        <c:url var="updateLink" value="/update">
                            <c:param name="boatId" value="${boat.id}"/>
                        </c:url>
                        <c:url var="deleteLink" value="/delete">
                            <c:param name="boatId" value="${boat.id}"/>
                        </c:url>
                        <tr>
                            <td>${boat.name}</td>
                            <td>${boat.model}</td>
                            <td>${boat.length} m</td>
                            <td>${boat.width} m</td>
                            <td>${boat.price} &#128;</td>
                            <td>
                                <a href="${updateLink}">Muokkaa</a>
                                | <a href="${deleteLink}"
                                     onclick="if (!(confirm('Haluatko varmasti poistaa tämän veneen?'))) return false">Poista</a>
                            </td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>

</html>









