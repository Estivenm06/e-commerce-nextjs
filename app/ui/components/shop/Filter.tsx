"use client";
import React from "react";
import {
  FilterBar,
  Title,
  FilterGroupItem,
  Select,
  Option,
  Slider,
} from "@ui5/webcomponents-react";

import { useStoreContext } from "../../../context/context";
import { FilterSkeleton } from "./FilterSkeleton";

const Filter = () => {
  const { categories, loading, filter, handleFilterChange, onGoFilter } = useStoreContext();

  if (loading || !categories || categories.length === 0) {
    return <FilterSkeleton />;
  }

  const categoryOptions = categories.map((category) => (
    <Option key={category} value={category}>
      {category}
    </Option>
  ));

  const handleClearFilter = () => {
    handleFilterChange("All Categories");
    handleFilterChange(5);
  };

  return (
    <FilterBar
      header={<Title>Filter</Title>}
      showClearOnFB
      showGoOnFB
      onClear={handleClearFilter}
      onGo={() => onGoFilter()}
    >
      <FilterGroupItem
        filterKey="category"
        label="Category"
        active={true}
      >
        <Select
          onChange={(e) => handleFilterChange(e.target.value)}
          value={filter.category}
        >
          <Option value="All Categories" selected>
            All Categories
          </Option>
          {categoryOptions}
        </Select>
      </FilterGroupItem>
      <FilterGroupItem
        filterKey="rating"
        label="Rating"
        active={true}
      >
        <Slider
          min={0}
          max={5}
          value={filter.rating}
          onChange={(e) => handleFilterChange(e.target.value)}
          step={0.5}
          showTooltip
        />
      </FilterGroupItem>
    </FilterBar>
  );
};

export { Filter };
