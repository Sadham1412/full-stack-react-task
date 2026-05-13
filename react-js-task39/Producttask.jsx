import { useState } from "react"

function Producttask() {

  const [search, setSearch] = useState("")
  const [hover, setHover] = useState("")

  const products = ["Laptop", "Mobile", "Mouse", "Keyboard"]

  // filter product
  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <h1>Product List</h1>

      {/* search input */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {/* condition */}
      {
        filteredProducts.length > 0 ? (

          filteredProducts.map((item, index) => (

            <h3
              key={index}

              onMouseEnter={() => setHover(item)}
              onMouseLeave={() => setHover("")}

              style={{
                backgroundColor:
                  hover === item ? "yellow" : "lightgray",

                padding: "10px"
              }}
            >
              {item}
            </h3>

          ))

        ) : (

          <h2>No products available</h2>

        )
      }

    </div>
  )
}

export default Producttask;