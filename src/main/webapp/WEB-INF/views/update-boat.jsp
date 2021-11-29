<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Muokkaa venettä - Venekanta</title>
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

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Lisää vene</h5>
                <form:form action="save" method="post" modelAttribute="boat">
                    <form:hidden path="id"/>

                    <div class="row mb-3">
                        <div class="col md-6">
                            <label for="name">Nimi</label>
                            <form:input path="name" cssClass="form-control"/>
                        </div>
                        <div class="col-md-6">
                            <label for="model">Merkki ja malli</label>
                            <form:input path="model" cssClass="form-control"/>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-4">
                            <label for="width">Leveys</label>
                            <form:input path="width" cssClass="form-control" type="number" step="0.1"/>
                        </div>
                        <div class="col-md-4">
                            <label for="length">Pituus</label>
                            <form:input path="length" cssClass="form-control" type="number" step="0.1"/>
                        </div>
                        <div class="col-md-4">
                            <label for="price">Hinta</label>
                            <form:input path="price" cssClass="form-control" type="number" step="1"/>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-1">
                            <form:button class="btn btn-primary">Tallenna</form:button>
                        </div>
                    </div>
                </form:form>
            </div>
        </div>
    </div>
</div>
</body>
</html>