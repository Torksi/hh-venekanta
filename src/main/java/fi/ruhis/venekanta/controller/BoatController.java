package fi.ruhis.venekanta.controller;

import fi.ruhis.venekanta.entity.Boat;
import fi.ruhis.venekanta.service.BoatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/")
public class BoatController {
    @Autowired
    private BoatService boatService;

    @GetMapping("/list")
    public String listBoats(Model model) {
        List<Boat> boatsList = boatService.getBoats();
        model.addAttribute("boats", boatsList);
        return "list-boats";
    }

    @GetMapping("/new")
    public String showFormForAdd(Model model) {
        Boat boat = new Boat();
        model.addAttribute("boat", boat);
        return "update-boat";
    }

    @PostMapping("/save")
    public String saveBoat(@ModelAttribute("boat") Boat boat) {
        boatService.saveBoat(boat);
        return "redirect:/list";
    }

    @GetMapping("/update")
    public String showFormForUpdate(@RequestParam("boatId") int id, Model model) {
        Boat theBoat = boatService.getBoat(id);
        model.addAttribute("boat", theBoat);
        return "update-boat";
    }

    @GetMapping("/delete")
    public String deleteBoat(@RequestParam("boatId") int id) {
        boatService.deleteBoat(id);
        return "redirect:/list";
    }
}
