import GridColumn from "@/app/component/GridColumn";
import NavComponent from "@/app/component/NavComponent";
import StudentInteraction from "@/app/component/StudentInteraction";
import { numberDetails } from "@/app/lib/data";
import ImageComponent from ".";
import NavContainer, { NavSectionContainer, NavSectionStudentContainer, NavGridContainer } from "./NavContainer";
import TopSide from "./Top";

export default function LayoutContainer() {
    
    return (
      <>
        <NavContainer>
          <NavComponent />
        </NavContainer>

        <NavSectionContainer>
          <TopSide />
          <ImageComponent />
        </NavSectionContainer>

        <NavSectionStudentContainer>
          <StudentInteraction data={numberDetails} />
        </NavSectionStudentContainer>

        <NavGridContainer>
          <GridColumn />
        </NavGridContainer>
      </>
    );
}