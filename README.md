# Venekanta

Haaga-Helia AHOT-tehtävä kursseille SWD4TA032-3011 ja SWD4TA033-3008.

## Projektin speksit ja käytetyt tekniikat

- IntelliJ IDEA 2020.2.1
- Maven
- Java JDK 1.8_231

### Backend

- Spring Framework
- Hibernate

### Frontend

- Bootstrap 5.1.3
- JQuery 3.6.0

## Screenshotit

Lista veneistä:
![Lista veneistä](https://i.imgur.com/EvDfIPs.png)

Uuden veneen lisääminen:
![Uuden veneen lisääminen](https://i.imgur.com/shLXjsD.png)

Veneen muokkaaminen:
![Veneen muokkaaminen](https://i.imgur.com/bhyPPno.png)

## Deployment

0. Sijoita tietokannan sqlite tiedosto `C:\Venekanta\Venekanta.sqlite` sijaintiin
1. `mvn clean install`
2. Maven buildaa `target/venekanta-0.0.1-SNAPSHOT.war` tiedoston, jonka voi deployata Tomcat-palvelimella
3. Alla kuva käyttämästäni IntelliJ:n konfiguraatiosta, jota käytin kun deployoin war-tiedoston.
   ![Käyttämäni IntelliJ Build Configuration](https://i.imgur.com/fxhG2QD.png)
