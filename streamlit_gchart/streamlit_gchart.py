import os
import streamlit.components.v1 as components

_RELEASE = True

if not _RELEASE:
    _component_func = components.declare_component(
        "gchart",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("gchart", path=build_dir)



def gchart(key="chart1", data=None, width=600, height=400, chartType=None, **kwargs):
    component_value = _component_func(key=key, data=data, width=width, height=height, chartType=chartType, options=kwargs)
    return component_value


if not _RELEASE:
    import streamlit as st
    st.header("Streamlit Google Charts")
    st.subheader("Bar Chart Demo")

    with st.echo(code_location='below'):
        pop_data = [
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000],
        ]

        gchart(key="city_chart", data=pop_data, chartType="BarChart", 
            width='500px', height='300px',  title="Population of Largest U.S. Cities", 
            hAxis={"title": 'Total Population', "minValue": 0}, vAxis={"title": 'City'} )


    # Create an instance of our component with a constant `name` arg, and
    # print its output value.
    st.subheader("Word Tree Demo")
    with st.echo(code_location='below'):
        cat_data = [
            ['Phrases'],
            ['cats are better than dogs'],
            ['cats eat kibble'],
            ['cats are better than hamsters'],
            ['cats are awesome'],
            ['cats are people too'],
            ['cats eat mice'],
            ['cats meowing'],
            ['cats in the cradle'],
            ['cats eat mice'],
            ['cats in the cradle lyrics'],
            ['cats eat kibble'],
            ['cats for adoption'],
            ['cats are family'],
            ['cats eat mice'],
            ['cats are better than kittens'],
            ['cats are evil'],
            ['cats are weird'],
            ['cats eat mice']
        ]
            
        gchart(key="cat_chart", data=cat_data, chartType="WordTree", 
            width=600, height=400, wordtree={"format": "implicit", "word": "cats"})
    
