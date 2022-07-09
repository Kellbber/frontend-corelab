import AddButton from "../../components/AddButton";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Car } from "../../types/Car-type";
import { carsApi } from "../../services/api";
import { CardCar } from "../../components/CardCar";
import { Filter } from "../../types/Filter-type";
import Modal from "react-modal";
import internal from "stream";
import SaveButton from "../../components/SaveButton";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Home = () => {
  const navigate = useNavigate();

  const [filterValues, setFilterValues] = useState({
    marca: "",
    cor: "",
    ano: "",
    precMin: "",
    precMax: "",
  });

  const [filter, setFilter] = useState<Filter>({
    brand: [],
    color: [],
    year: [],
  });

  const [search, setSearch] = useState<string>("");

  const [cars, setCars] = useState<Car[]>([]);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function goToAdd() {
    navigate("/create");
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFilter = {
      marca: event.currentTarget.marca.value,
      cor: event.currentTarget.cor.value,
      ano: event.currentTarget.ano.value,
      precMin: event.currentTarget.precMin.value,
      precMax: event.currentTarget.precMax.value,
    };
    setFilterValues(newFilter);
    closeModal();
  };

  async function getCars() {
    const carList = await carsApi.getCars();
    carList.map((car: Car) => {
      if (!filter.brand.includes(car.brand)) {
        const newBrands = filter.brand;
        newBrands.push(car.brand);
        setFilter({
          ...filter,
          brand: newBrands,
        });
      }
      if (!filter.year.includes(car.year)) {
        const newYears = filter.year;
        newYears.push(car.year);
        setFilter({
          ...filter,
          year: newYears,
        });
      }
      if (!filter.color.includes(car.color)) {
        const newColors = filter.color;
        newColors.push(car.color);
        setFilter({
          ...filter,
          color: newColors,
        });
      }
    });
    setCars(carList);
  }

  useEffect(() => {
    getCars();
  }, []);
  return (
    <S.Home>
      <S.HomeContent>
        <S.HomeContentSearch>
          <S.HomeSearch>
            <img />
            <input
              type="text"
              placeholder="Buscar"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </S.HomeSearch>
          <S.HomeEqualizer onClick={openModal}>
            <img />
          </S.HomeEqualizer>
        </S.HomeContentSearch>
        <S.HomeButton onClick={goToAdd}>
          <AddButton />
        </S.HomeButton>
        <S.HomeCarList>
          {cars
            .filter((car) => {
              if (car.brand.includes(filterValues.marca)) {
                return car;
              }
              if (car.color.includes(filterValues.cor)) {
                return car;
              }
              if (String(car.year)==filterValues.ano) {
                return car;
              }
            })
            .filter((car) => {
              if (car.name.toLowerCase().includes(search.toLowerCase())) {
                return car;
              }

              if (car.color.toLowerCase().includes(search.toLowerCase())) {
                return car;
              }
              if (car.brand.toLowerCase().includes(search.toLowerCase())) {
                return car;
              }
              if (
                car.description.toLowerCase().includes(search.toLowerCase())
              ) {
                return car;
              }
              if (String(car.year) == search) {
                return car;
              }
              if (String(car.price) == search) {
                return car;
              }
            })
            .map((car) => {
              return <CardCar car={car} key={car.id} />;
            })}
        </S.HomeCarList>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>X</button>
          <S.HomeFilterModal onSubmit={handleSubmit}>
            <div>
              <label htmlFor="marca">Marca:</label>
              <select
                defaultValue={
                  filterValues.marca!== "" ? filterValues.marca : "default"
                }
                name="marca"
                id="marca"
              >
                <option
                  value="default"
                  disabled
                  style={{ display: "none" }}
                ></option>
                {filter.brand.map((brand) => {
                  return <option value={brand}>{brand}</option>;
                })}
              </select>

              <label htmlFor="cor">Cor:</label>
              <select defaultValue="default" name="cor" id="cor">
                <option
                  value="default"
                  disabled
                  style={{ display: "none" }}
                ></option>
                {filter.color.map((color) => {
                  return <option value={color}>{color}</option>;
                })}
              </select>

              <label htmlFor="ano">Ano:</label>
              <select defaultValue="default" name="ano" id="ano">
                <option
                  value="default"
                  disabled
                  style={{ display: "none" }}
                ></option>
                {filter.year.map((year) => {
                  return <option value={year}>{year}</option>;
                })}
              </select>

              <label htmlFor="precMin">Preço mín:</label>
              <input type="number" name="precMin" id="precMin"></input>

              <label htmlFor="precMax">Preço máx:</label>
              <input type="number" name="precMax" id="precMax"></input>
            </div>
            <SaveButton type="submit" />


          </S.HomeFilterModal>
        </Modal>
        <button onClick={()=>{
              setFilterValues({
                marca: "",
                cor: "",
                ano: "",
                precMin: "",
                precMax: "",
              })
            }}>Limpar Filtros</button>
      </S.HomeContent>
      
    </S.Home>
  );
};

export default Home;
