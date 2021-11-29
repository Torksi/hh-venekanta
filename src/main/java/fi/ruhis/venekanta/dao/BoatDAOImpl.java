package fi.ruhis.venekanta.dao;

import fi.ruhis.venekanta.entity.Boat;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class BoatDAOImpl implements BoatDAO {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Boat> getBoats() {
        Session session = sessionFactory.getCurrentSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<Boat> criteriaQuery = builder.createQuery(Boat.class);
        Root<Boat> root = criteriaQuery.from(Boat.class);
        criteriaQuery.select(root);
        Query query = session.createQuery(criteriaQuery);
        return query.getResultList();
    }

    @Override
    public void deleteBoat(int id) {
        Session session = sessionFactory.getCurrentSession();
        Boat book = session.byId(Boat.class).load(id);
        session.delete(book);
    }

    @Override
    public void saveBoat(Boat boat) {
        Session currentSession = sessionFactory.getCurrentSession();
        currentSession.saveOrUpdate(boat);
    }

    @Override
    public Boat getBoat(int id) {
        Session currentSession = sessionFactory.getCurrentSession();
        Boat boat = currentSession.get(Boat.class, id);
        return boat;
    }
}
