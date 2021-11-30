package fi.ruhis.venekanta.service;

import fi.ruhis.venekanta.dao.BoatDAO;
import fi.ruhis.venekanta.entity.Boat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BoatServiceImpl implements BoatService {
    @Autowired
    private BoatDAO boatDAO;

    @Override
    @Transactional
    public List<Boat> getBoats() {
        return boatDAO.getBoats();
    }

    @Override
    @Transactional
    public Boat saveBoat(Boat boat) {
        boatDAO.saveBoat(boat);
        return boat;
    }

    @Override
    @Transactional
    public Boat getBoat(int id) {
        return boatDAO.getBoat(id);
    }

    @Override
    @Transactional
    public void deleteBoat(int id) {
        boatDAO.deleteBoat(id);
    }
}





