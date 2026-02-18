import svgPaths from "../imports/svg-1vzfmd7o5i";

interface RoleCardProps {
  companyName: string;
  roleName: string;
  onClick: () => void;
}

function RoleCard({ companyName, roleName, onClick }: RoleCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-start justify-between w-full h-[80px] px-4 py-3 bg-white border border-border hover:bg-muted transition-colors text-left"
      style={{ borderRadius: '12px' }}
    >
      <div className="flex flex-col gap-1">
        <p className="title-medium text-foreground">{companyName}</p>
        <p className="body-medium text-muted-foreground">{roleName}</p>
      </div>
      <div className="shrink-0 size-6">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.pa1eb970} fill="var(--foreground)" />
        </svg>
      </div>
    </button>
  );
}

function KSLLogo() {
  // Norsk Mat logo - using expanded size (162×64px)
  return (
    <div className="flex items-center justify-start">
      <svg 
        width="162" 
        height="64" 
        viewBox="0 0 81 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 24.0534C0 25.5734 1.23497 26.9794 2.73594 27.1884L37.6761 31.8432C39.1961 32.0522 41.647 32.0522 43.167 31.8432L78.0502 27.1884C79.5701 26.9794 80.7861 25.5924 80.7861 24.0534V2.46994H0V24.0534Z" fill="#4A4A4A"/>
        <path d="M44.744 19.9115L47.1569 16.5296H44.915L42.065 20.4815V13.8317H40.0891V23.9014H41.7421L43.471 21.5265L45.105 23.9014H47.4039L44.744 19.9115ZM35.9472 24.0914C37.7141 24.0914 38.8921 23.2554 38.8921 21.7355C38.8921 18.6955 34.6172 19.8735 34.6172 18.5816C34.6172 18.0306 35.2442 17.9166 35.7002 17.9166C36.4032 17.9166 37.2202 18.1446 37.8851 18.5056L38.5121 17.1756C37.7331 16.6626 36.7832 16.3966 35.6622 16.3966C34.0472 16.3966 32.7173 17.1756 32.7173 18.7145C32.7173 21.6595 37.0302 20.5005 37.0302 21.8875C37.0302 22.3815 36.5932 22.5335 35.8712 22.5335C35.0732 22.5335 34.0092 22.2105 33.3632 21.7735L32.6413 23.0654C33.5532 23.7684 34.5222 24.0914 35.9472 24.0914ZM29.2973 18.0116V16.5296H27.3214V23.8824H29.2973V21.0515C29.2973 19.0945 30.5133 18.5436 31.7673 18.5436H31.9953V16.4536C30.5133 16.4536 29.7343 17.2896 29.2973 18.0116ZM22.2105 18.1636C23.4265 18.1636 24.1485 19.0375 24.1485 20.2155C24.1485 21.3745 23.4265 22.2865 22.2105 22.2865C20.9945 22.2865 20.2726 21.3745 20.2726 20.2155C20.2726 19.0375 21.0135 18.1636 22.2105 18.1636ZM22.2105 24.0344C24.5095 24.0344 26.1434 22.3055 26.1434 20.2155C26.1434 18.1066 24.5095 16.3966 22.2105 16.3966C19.9116 16.3966 18.2776 18.1066 18.2776 20.2155C18.2776 22.3055 19.9116 24.0344 22.2105 24.0344ZM14.9337 14.3827V20.2915L10.6588 14.3827H8.72083V23.8824H10.7728V17.9736L15.0477 23.8824H16.9856V14.3827H14.9337Z" fill="white"/>
        <path d="M70.9632 18.2965H72.5402V16.5296H70.9632V14.8766H70.8682L68.2083 17.5556V18.2965H69.0063V22.0774C69.0063 23.3694 69.8422 24.0154 71.2292 24.0154C72.3312 24.0154 72.8822 23.7114 72.8822 23.7114L72.5782 22.2294C72.5782 22.2294 72.2742 22.3624 71.8752 22.3624C71.4002 22.3624 70.9822 22.1344 70.9822 21.4695V18.2965H70.9632ZM63.6294 22.6094C62.8694 22.6094 62.2614 22.2674 62.2614 21.5835C62.2614 20.9185 62.9644 20.5765 63.8004 20.5765C64.3134 20.5765 64.8074 20.6525 65.2824 20.8235V21.3175C65.2824 22.1724 64.5034 22.6094 63.6294 22.6094ZM65.3393 23.8824H67.2393V19.7595C67.2393 17.5176 66.2133 16.3776 63.8954 16.3776C62.5274 16.3776 61.3304 16.8146 60.6465 17.1376L61.1214 18.5815C61.5774 18.3535 62.6224 18.0495 63.5914 18.0495C64.6554 18.0495 65.2633 18.5245 65.2443 19.6455C64.5604 19.4555 63.9144 19.3605 63.2684 19.3605C61.7864 19.3605 60.2665 20.1585 60.2665 21.7165C60.2665 23.2174 61.4254 24.0154 63.0594 24.0154C64.0664 24.0154 64.8834 23.6734 65.3204 23.0464L65.3393 23.8824ZM58.9745 14.3826H56.7516L53.9016 19.1135L51.0517 14.3826H48.8287V23.8824H50.8807V17.7645L53.5596 22.2864H54.2436L56.9225 17.7645V23.8824H58.9935V14.3826H58.9745Z" fill="#D9D9D9"/>
        <path d="M13.0337 0H8.72083V4.95888H13.0337V0Z" fill="#E20613"/>
        <path d="M14.6107 0H13.0337V4.95888H14.6107V0Z" fill="white"/>
        <path d="M18.3725 0H16.7955V4.95888H18.3725V0Z" fill="white"/>
        <path d="M22.6855 0H18.3726V4.95888H22.6855V0Z" fill="#E20613"/>
        <path d="M16.7955 0H14.6106V4.95888H16.7955V0Z" fill="#1D418E"/>
        <path d="M38.9681 8.11283V10.3168L37.3911 8.11283H36.8782V11.2668H37.4291V9.06281L39.0061 11.2668H39.5381V8.11283H38.9681ZM34.1802 8.58782H35.7382V8.11283H33.6482V11.2668H35.7382V10.7918H34.1802V9.93679H35.5672V9.4618H34.1802V8.58782ZM30.2853 10.4688L29.9813 10.8678C30.3043 11.1338 30.7983 11.3238 31.3303 11.3238C32.0333 11.3238 32.5273 11.0008 32.5273 10.3928C32.5273 9.13881 30.5513 9.6138 30.5513 8.96781C30.5513 8.66382 30.8553 8.54982 31.1593 8.54982C31.5203 8.54982 31.8243 8.64482 32.0713 8.83482L32.3563 8.43583C32.0713 8.20783 31.6723 8.03683 31.1973 8.03683C30.5893 8.03683 30.0003 8.32183 30.0003 8.96781C30.0003 10.1838 31.9763 9.70879 31.9763 10.3928C31.9763 10.6968 31.7103 10.8108 31.3303 10.8108C30.9123 10.8108 30.5513 10.6778 30.2853 10.4688ZM29.0693 10.7918H27.5114V8.11283H26.9604V11.2668H29.0693V10.7918ZM24.2625 8.58782H25.8204V8.11283H23.7305V11.2668H25.8204V10.7918H24.2625V9.93679H25.6494V9.4618H24.2625V8.58782ZM22.7045 8.58782V8.11283H20.3295V8.58782H21.2415V11.2668H21.7925V8.58782H22.7045ZM17.8976 8.58782H19.4556V8.11283H17.3656V11.2668H17.9166V9.93679H19.3036V9.4618H17.9166V8.58782H17.8976ZM16.0357 8.11283H15.4847V11.2668H16.0357V8.11283ZM14.4777 8.58782V8.11283H12.1027V8.58782H13.0147V11.2668H13.5657V8.58782H14.4777ZM9.02482 10.4688L8.72083 10.8678C9.04382 11.1338 9.53781 11.3238 10.0698 11.3238C10.7728 11.3238 11.2668 11.0008 11.2668 10.3928C11.2668 9.13881 9.29081 9.6138 9.29081 8.96781C9.29081 8.66382 9.5948 8.54982 9.8988 8.54982C10.2598 8.54982 10.5638 8.64482 10.8108 8.83482L11.0958 8.43583C10.8108 8.20783 10.4118 8.03683 9.9368 8.03683C9.32881 8.03683 8.73982 8.32183 8.73982 8.96781C8.73982 10.1838 10.7158 9.70879 10.7158 10.3928C10.7158 10.6968 10.4498 10.8108 10.0698 10.8108C9.6518 10.8108 9.29081 10.6778 9.02482 10.4688Z" fill="white"/>
      </svg>
    </div>
  );
}

function HelpButton() {
  return (
    <button 
      className="flex items-center justify-center size-12 rounded-full hover:bg-muted transition-colors"
      aria-label="Hjelp"
    >
      <svg className="size-6" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.pe593d70} fill="var(--foreground)" />
      </svg>
    </button>
  );
}

function UserProfile() {
  return (
    <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-muted transition-colors">
      {/* Avatar */}
      <div className="relative size-10 rounded-full bg-muted overflow-hidden">
        <svg className="block size-full" fill="none" viewBox="0 0 40 40">
          <rect fill="var(--muted)" height="40" rx="20" width="40" />
          <path 
            clipRule="evenodd" 
            d={svgPaths.p16400780} 
            fill="var(--muted-foreground)" 
            fillRule="evenodd" 
          />
          <path d={svgPaths.pfd6ae80} fill="var(--muted-foreground)" />
        </svg>
      </div>
      {/* User info */}
      <div className="flex flex-col">
        <p className="body-medium text-foreground">Liv Berg</p>
        <p className="body-small text-muted-foreground">Liv.berg@ksl.no</p>
      </div>
    </div>
  );
}

interface ByttRollePageProps {
  onRoleSelect?: (roleId: number) => void;
}

export default function ByttRollePage({ onRoleSelect }: ByttRollePageProps) {
  const roles = [
    { id: 1, companyName: 'STIFTELSEN NORSK MAT', roleName: 'Superadmin' },
    { id: 2, companyName: 'KETIL NORDSETH', roleName: 'Ansatt' },
    { id: 3, companyName: 'KETIL NORDSETH', roleName: 'Revisor' },
    { id: 4, companyName: 'NORTURA SA', roleName: 'Varemottakeradministrator' },
    { id: 5, companyName: 'Fatland Jæren AS', roleName: 'Varemottakeradministrator' },
  ];

  const handleRoleClick = (roleId: number) => {
    console.log('Selected role:', roleId);
    if (onRoleSelect) {
      onRoleSelect(roleId);
    }
  };

  const handleRequestAccess = () => {
    console.log('Request access to new company');
    // Handle request access
  };

  return (
    <div className="flex flex-col h-screen bg-background w-full">
      {/* Top Bar - Full width with 8px vertical padding */}
      <div className="flex items-center justify-between py-2 px-6 bg-white border-b border-border shrink-0">
        <KSLLogo />
        <div className="flex items-center gap-4">
          <HelpButton />
          <UserProfile />
        </div>
      </div>

      {/* Main Content - Exact layout as specified */}
      <div className="flex flex-col items-stretch flex-1 self-stretch overflow-y-auto px-6 max-[1400px]:px-6 min-[1400px]:px-[240px] pt-10 gap-4">
        <h1 className="headline-medium text-foreground">Hei Liv Berg!</h1>
        
        <p className="title-medium text-foreground">Foretak du har tilgang til:</p>
        
        {/* Role Cards */}
        <div className="flex flex-col w-full max-w-[480px]" style={{ gap: '8px' }}>
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              companyName={role.companyName}
              roleName={role.roleName}
              onClick={() => handleRoleClick(role.id)}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border w-full" />

        {/* Request Access Section */}
        <p className="title-medium text-foreground">
          Trenger du tilgang til andre foretak?
        </p>
        
        <button
          onClick={handleRequestAccess}
          className="inline-flex items-center gap-2 px-6 py-3.5 h-14 rounded-[var(--radius-button)] border border-border hover:bg-muted transition-colors label-medium max-w-[480px]"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p2a6e0600} fill="var(--foreground)" />
          </svg>
          <span className="label-large text-foreground">Be om tilgang til nytt foretak</span>
        </button>
      </div>
    </div>
  );
}