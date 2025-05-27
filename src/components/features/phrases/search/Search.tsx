// Hooks
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";

// Custom Hooks
import useDebouncedState from "../../../../hooks/useDebounceState";

// Components
import Button from "../../../ui/button/Button";

// Types
import type { ChangeEvent } from "react";

// Styles
import styles from "./search.module.css";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useDebouncedState(
    searchParams.get("search") || ""
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearchParams(search ? { search } : {});
  }, [search, setSearchParams]);

  const handleClear = () => {
    setSearch("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        defaultValue={search}
        placeholder="Search phrase..."
        onChange={handleInputChange}
        className={styles.input}
      />
      <Button className={styles.icon} onClick={handleClear} />
    </div>
  );
};

export default Search;
