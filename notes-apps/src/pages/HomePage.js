import React from "react";
import { useSearchParams } from 'react-router-dom';
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/data-network";
import { LocaleConsumer } from "../contexts/LocaleContex";


function HomePage() {
  const [notes, setNotes] = React.useState([]);
  const [title, setTitle] = React.useState(null);
  const [body, setBody] = React.useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || ''
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);


  function onChangeSearchParams(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  React.useEffect(() => {
    async function setActiveNotes() {
      const { error, data } = await getActiveNotes();

      if (!error) {
        setNotes(data)
      }
      setTitle(title);
      setBody(body);
    }
    setActiveNotes();

    return () => {
      setTitle(null);
      setBody(null);
    };
  }, [title, body]);

  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (

            <div>
              <section>
                <h2>{locale === 'id' ? "Daftar Catatan" : "List Notes"}</h2>
                <SearchBar keyword={keyword} keywordChange={onChangeSearchParams} />
                <NotesList notes={notes} filter={filteredNotes} />
              </section>
            </div>
          )
        }
      }
    </LocaleConsumer>
  )
}


export default HomePage;