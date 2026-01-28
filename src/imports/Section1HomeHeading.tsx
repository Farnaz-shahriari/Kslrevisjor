function ProfileDetails() {
  return (
    <div className="bg-[#9fd2bc] h-[160px] relative shrink-0 w-full" data-name="Profile Details">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[48px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[24px] text-nowrap">
            <p className="leading-[32px]">{`Section 1-  Home heading`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section2AllTheUpcomingRevisjoner() {
  return (
    <div className="basis-0 bg-[#d49939] grow h-full min-h-px min-w-px relative shrink-0" data-name="Section 2-  All the upcoming revisjoner">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[48px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
            <p className="leading-[32px]">{`Section 2-  All the upcoming revisjoner`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section3SidePanelToDoList() {
  return (
    <div className="bg-[#3946d4] content-stretch flex h-full items-center px-[48px] py-[16px] relative shrink-0 w-[520px]" data-name="Section 3-  Side panel to-do list">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[32px]">{`Section 3-  Side panel to-do list`}</p>
      </div>
    </div>
  );
}

function Section2AllTheUpcomingRevisjoner1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Section 2-  All the upcoming revisjoner">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[24px] py-0 relative size-full">
          <Section2AllTheUpcomingRevisjoner />
          <Section3SidePanelToDoList />
        </div>
      </div>
    </div>
  );
}

export default function Section1HomeHeading() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Section 1-  Home heading">
      <ProfileDetails />
      <Section2AllTheUpcomingRevisjoner1 />
    </div>
  );
}