package fi.ruhis.venekanta.entity;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Entity
@Table(name = "veneet")
public class Boat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tunnus")
    private int id;

    @Column(name = "nimi")
    @Length(max = 50)
    private String name;

    @Column(name = "merkkimalli")
    @Length(max = 50)
    private String model;

    @Column(name = "pituus")
    private double length;

    @Column(name = "leveys")
    private double width;

    @Column(name = "hinta")
    private int price;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Boat [id=" + id + ", name=" + name + ", model=" + model + ", length=" + length + ", width=" + width + ", price=" + price + "]";
    }
}





