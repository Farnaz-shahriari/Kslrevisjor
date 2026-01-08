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
  return (
    <div className="h-[55.677px] w-[92.774px]">
      <div className="relative size-full">
        {/* KSL Logo graphic */}
        <div className="absolute h-[23.57px] left-0 top-0 w-[78.233px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 24">
            <path d={svgPaths.p170b9b00} fill="#79B61D" />
            <path d={svgPaths.p2e49f100} fill="#79B61D" />
            <path d={svgPaths.p194b95f0} fill="white" />
            <path d={svgPaths.p26648e00} fill="#177312" />
            <path d={svgPaths.p15eb980} fill="#008F00" />
            <path d={svgPaths.p27d29980} fill="#79B61D" />
            <path d={svgPaths.p2f715300} fill="#AFD377" />
            <path d={svgPaths.p2f6f7580} fill="#79B61D" />
          </svg>
        </div>
        {/* Kvalitetssystem text */}
        <div className="absolute h-[25.301px] left-0 top-[30.38px] w-[92.774px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 26">
            <path d={svgPaths.p22e00180} fill="black" />
            <path d={svgPaths.p35b08100} fill="black" />
            <path d={svgPaths.p3596f680} fill="black" />
            <path d={svgPaths.pb281e00} fill="black" />
            <path d={svgPaths.p18518b00} fill="black" />
            <path d={svgPaths.p1f111800} fill="black" />
            <path d={svgPaths.p25a4df00} fill="black" />
            <path d={svgPaths.p36e2e900} fill="black" />
            <path d={svgPaths.p2675c900} fill="black" />
            <path d={svgPaths.p27f0ab00} fill="black" />
            <path d={svgPaths.p283ce180} fill="black" />
            <path d={svgPaths.p201d8a00} fill="black" />
            <path d={svgPaths.p277fdc00} fill="black" />
            <path d={svgPaths.p241f6b70} fill="black" />
            <path d={svgPaths.p2959ef00} fill="black" />
            <path d={svgPaths.p1214de00} fill="black" />
            <path d={svgPaths.p2faf9e80} fill="black" />
            <path d={svgPaths.p24216180} fill="black" />
            <path d={svgPaths.p1599a100} fill="black" />
            <path d={svgPaths.p128ae200} fill="black" />
            <path d={svgPaths.p315b85c0} fill="black" />
            <path d={svgPaths.p3c930bc0} fill="black" />
            <path d={svgPaths.pff96c80} fill="black" />
            <path d={svgPaths.p860dd00} fill="black" />
            <path d={svgPaths.p165b8b00} fill="black" />
            <path d={svgPaths.p20480480} fill="black" />
          </svg>
        </div>
      </div>
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