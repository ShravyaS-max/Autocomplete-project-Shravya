import React, { useState } from 'react';

const Autocomplete = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() !== '') {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults.slice(0, 5));
    } else {
      setResults([]);
    }
  };

  const handleClearClick = () => {
    setQuery('');
    setResults([]);
  };

  const handleDropdownClick = (item) => {
    setQuery(item);
    setResults([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const highlightText = (text) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  return (
    <div className="autocomplete">
      <h1>Quick Find</h1>
      <h2> Search for Colors..</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input-text"
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <span>
            <button type="button" onClick={handleClearClick} className="clear-button">
              Clear
            </button>
          </span>
        </div>
        {results.length > 0 && (
          <ul className="dropdown">
            {results.map((item) => (
              <li
                key={item}
                onClick={() => handleDropdownClick(item)}
                style={{ color: item.toLowerCase() }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {results.length > 0 && (
        <div className="query-results">
          <h3>Results for "{query}":</h3>
          <ul>
            {results.map((item) => (
              <li
                key={item}
                dangerouslySetInnerHTML={{ __html: highlightText(item) }}
                style={{ color: item.toLowerCase() }}
              />
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .dropdown {
          list-style-type: none;
          padding: 0;
          margin: 10px 0;
          background-color: #ffffff;
          border: 1px solid #ccc;
          border-radius: 3px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
           font-size: 120%;
        }
         .h2{
          font-size: 100%;
        }
        .input-text {
          color: #000000;
          font-family: Georgia, 'Times New Roman', Times, serif;
        }
        .dropdown li {
          padding: 5px 10px;
          cursor: pointer;
        }
        .submit-button{
           background-color: #208664;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
           font-size: 90%;
        }
         .autocomplete {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dropdown li:hover {
          background-color: #3495a7;
          font-family: cursive
            {
            color: #ffffff;
            }

            .autocomplete {
            display: flex;
            flex-direction: column;
            align-items: center;
            }

            .highlight {
            color: #ff0000;
            }

            .clear-button {
          background-color: #f44336;
          color: #fff;
          border: none;
          padding: 1px 50px;
          margin: 10px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 120%;
        }
            }

           .query-results{
           color: #000000;
           font-size: 120%;
           align-items: left;

        }

            .clear-button:hover {
            background
            }
            
            .input-wrapper {
            display: flex;
            align-items: center;
            }

          .highlight {
            color: #000000; 
            font-size: 100%;
          }
         .input-wrapper button {
          margin-left: 15px;
          background-color: #f44336;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 3px;
        }
            .input-wrapper input {
            flex-grow: 1;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 3px;
            font-size: 100%;
            }

            .input-text{
                    color: #000000;
                    font-family: Georgia, 'Times New Roman', Times, serif;
            }

            .input-wrapper button {
            margin-left: 15px;
            background-color: #f44336;
            color: #fff;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 3px;
            }

            .input-wrapper button:hover {
            background-color: #1976d2;
            }

            `}</style>

            </div>
            
            );
            };

export default Autocomplete;






















/*import React, { useState } from 'react';

const Autocomplete = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() !== '') {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults.slice(0, 5));
    } else {
      setResults([]);
    }
  };

  const handleClearClick = () => {
    setQuery('');
    setResults([]);
  };

  const handleDropdownClick = (item) => {
    setQuery(item);
    setResults([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const highlightText = (text) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  return (
    <div className="autocomplete">
    <h1> Quick Find</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
          className = "input-text"
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <span>
            <button type="button" onClick={handleClearClick} className="clear-button">
              Clear
            </button>
          </span>
        </div>
        {results.length > 0 && (
          <ul className="dropdown">
            {results.map((item) => (
              <li
                key={item}
                onClick={() => handleDropdownClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <br/>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {results.length > 0 && (
        <div className="query-results">
          <h3>Results for "{query}":</h3>
          <ul>
            {results.map((item) => (
              <li
                key={item}
                dangerouslySetInnerHTML={{ __html: highlightText(item) }}
              />
            ))}
          </ul>
        </div>
      )}

      <style>
        {`
        .dropdown {
          list-style-type: none;
          padding: 0;
          margin: 10px 0;
          background-color: #72c8e2;
          border: 1px solid #ccc;
          border-radius: 3px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-size: 120%;
        }
       

        .dropdown li {
          padding: 5px 10px;
          cursor: pointer;

        }
        .submit-button{
           background-color: #208664;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
           font-size: 90%;
        }
        .dropdown li:hover {
          background-color: #1518cc;
         font-family:cursive;
          color: #ffffff;
        }
         .autocomplete {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .highlight {
          color: #ff0000; 
        }
        
        .clear-button {
          background-color: #f44336;
          color: #fff;
          border: none;
          padding: 15px 50px;
          margin: 10px;
          cursor: pointer;
          border-radius: 3px;
          font-size: 100%;
        }
        .query-results{
           color: #0000ff;
           font-size: 120%;
           align-items: left;

        }
        .clear-button:hover {
          background
        }
        .input-wrapper {
          display: flex;
          align-items: center;
        }
        
        .input-wrapper input {
          flex-grow: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 100%;
        }
        .input-wrapper button {
          margin-left: 15px;
          background-color: #f44336;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 3px;
        }
        
        .input-wrapper button:hover {
          background-color: #1976d2;
        }
         `}
      </style>
    </div>
  );
};
export default Autocomplete;

*/

















/*import React, { useState } from 'react';

const Autocomplete = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() !== '') {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults.slice(0, 5));
    } 
    else {
      setResults([]);
    }
  };

  const handleClearClick = () => {
    setQuery('');
    setResults([]);
  };

  const handleDropdownClick = (item) => {
    setQuery(item);
    setResults([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

const highlightText = (text) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };
  
  return (
    <div className="autocomplete">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
           <span>
            <button type="button" onClick={handleClearClick}>
              Clear
            </button>
            </span>
          
        </div>
        {results.length > 0 && (
          <ul className="dropdown">
            {results.map((item) => (
              <li
                key={item}
                onClick={() => handleDropdownClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <button type="submit">Submit</button>
      </form>
      
      {results.length > 0 && (
        <div className="query-results">
          <h3>Results for "{query}":</h3>
          <ul>
            {results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};



export default Autocomplete;*/
