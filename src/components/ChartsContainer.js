import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ChartsContainer";
import BarChartComponent from "./BarChart";

const ChartsContainer = () => {
    const {monthlyApplications:data} = useSelector((store) => store.allJobs);
    return (
        <Wrapper>
           <h4>Monthly applications</h4>
            <BarChartComponent data={data}/>
        </Wrapper>
    );
};

export default ChartsContainer;