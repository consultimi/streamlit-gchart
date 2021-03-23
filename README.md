# Streamlit Google Charts
 Google Charts Component for Streamlit. A lightweight wrapper around [React Google Charts](https://react-google-charts.com/)


```
    import streamlit as st

    st.subheader("Bar Chart Demo")

    pop_data = [
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000],
    ]

    gchart(key="city_chart", data=pop_data, chartType="BarChart", width='500px', height='300px', 
        title="Population of Largest U.S. Cities", hAxis={"title": 'Total Population', "minValue": 0}, vAxis={"title": 'City'} )
```
