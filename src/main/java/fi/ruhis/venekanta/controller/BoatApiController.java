package fi.ruhis.venekanta.controller;

import com.google.gson.Gson;
import fi.ruhis.venekanta.entity.Boat;
import fi.ruhis.venekanta.service.BoatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class BoatApiController {
    @Autowired
    private BoatService boatService;

    // Aggregate root
    // tag::get-aggregate-root[]
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @GetMapping(value = "/boats")
    String all() {
        return new Gson().toJson(boatService.getBoats());
    }
    // end::get-aggregate-root[]

    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @PostMapping("/boats")
    String newBoat(@RequestBody Boat boat) {
        return new Gson().toJson(boatService.saveBoat(boat));
    }

    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @GetMapping("/boats/{id}")
    String one(@PathVariable int id) {
        return new Gson().toJson(boatService.getBoat(id));
    }

    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @DeleteMapping("/boats/{id}")
    String deleteBoat(@PathVariable int id) {
        boatService.deleteBoat(id);
        return "{\"success\":\"true\"}";
    }
}
