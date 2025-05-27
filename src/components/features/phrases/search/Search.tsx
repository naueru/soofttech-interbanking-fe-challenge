// Hooks
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";

// Custom Hooks
import useDebouncedState from "../../../../hooks/useDebouncedState";

// Components
import Button from "../../../ui/button/Button";

// Types
import type { ChangeEvent } from "react";

// Styles
import styles from "./search.module.css";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useDebouncedState(
    searchParams.get("search") || ""
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  useEffect(() => {
    setSearchParams(filter ? { search: filter } : {});
  }, [filter, setSearchParams]);

  const handleClear = () => {
    setFilter("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        defaultValue={filter}
        placeholder="Search phrase..."
        onChange={handleInputChange}
        className={styles.input}
      />
      <Button className={styles.icon} onClick={handleClear} />
    </div>
  );
};

export default Search;
