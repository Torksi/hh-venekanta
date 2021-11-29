package fi.ruhis.venekanta.service;

import fi.ruhis.venekanta.entity.Boat;

import java.util.List;

public interface BoatService {
    List<Boat> getBoats();

    void saveBoat(Boat boat);

    Boat getBoat(int id);

    void deleteBoat(int id);
}
