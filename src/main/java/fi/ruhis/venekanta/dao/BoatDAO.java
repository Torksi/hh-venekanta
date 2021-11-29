package fi.ruhis.venekanta.dao;

import fi.ruhis.venekanta.entity.Boat;

import java.util.List;

public interface BoatDAO {
    List<Boat> getBoats();

    void saveBoat(Boat boat);

    Boat getBoat(int id);

    void deleteBoat(int id);
}
