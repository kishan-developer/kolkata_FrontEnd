# Admin Dashboard UI/UX Redesign Specifications
## Modern 2026 SaaS Design System

---

## 1. Design System Foundation

### 1.1 Typography System
```css
/* Font Family: Inter (Google Fonts) */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Font Weights */
--font-heading: 700;      /* H1-H3 */
--font-title: 600;       /* H4-H6, Section titles */
--font-body: 400;        /* Body text, descriptions */
--font-button: 500;      /* Buttons, menu items, labels */
--font-mono: 400;        /* Code, IDs, timestamps */

/* Font Sizes - Scale System */
--text-xs: 12px;         /* Labels, badges, metadata */
--text-sm: 14px;         /* Body text, secondary */
--text-base: 16px;       /* Default base */
--text-lg: 18px;         /* Subheadings */
--text-xl: 20px;         /* Section titles */
--text-2xl: 24px;        /* Page headings */
--text-3xl: 30px;        /* Hero titles */
--text-4xl: 36px;        /* Display headings */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### 1.2 Color Palette
```css
/* Primary Colors */
--primary-50: #EFF6FF;
--primary-100: #DBEAFE;
--primary-200: #BFDBFE;
--primary-300: #93C5FD;
--primary-400: #60A5FA;
--primary-500: #3B82F6;
--primary-600: #2563EB;  /* Main Primary */
--primary-700: #1D4ED8;
--primary-800: #1E40AF;
--primary-900: #1E3A8A;

/* Semantic Colors */
--success: #16A34A;
--success-light: #DCFCE7;
--warning: #F59E0B;
--warning-light: #FEF3C7;
--danger: #DC2626;
--danger-light: #FEE2E2;
--info: #0891B2;
--info-light: #CFFAFE;

/* Neutral Colors */
--bg-primary: #F8FAFC;     /* Main background */
--bg-card: #FFFFFF;        /* Card background */
--bg-hover: #F1F5F9;       /* Hover states */
--bg-active: #E2E8F0;      /* Active states */

--text-primary: #0F172A;   /* Primary text */
--text-secondary: #64748B; /* Secondary text */
--text-tertiary: #94A3B8;  /* Tertiary text */
--text-muted: #CBD5E1;     /* Muted text */

--border-primary: #E2E8F0; /* Primary borders */
--border-secondary: #F1F5F9; /* Secondary borders */

/* Gradient Accents */
--gradient-primary: linear-gradient(135deg, #2563EB 0%, #3B82F6 100%);
--gradient-success: linear-gradient(135deg, #16A34A 0%, #22C55E 100%);
--gradient-warning: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
```

### 1.3 Spacing System (8px Grid)
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### 1.4 Border Radius System
```css
--radius-sm: 6px;    /* Small elements, badges */
--radius-md: 10px;   /* Buttons, inputs */
--radius-lg: 16px;   /* Cards */
--radius-xl: 20px;   /* Large cards, modals */
--radius-2xl: 24px;  /* Hero sections */
--radius-full: 9999px; /* Pills, avatars */
```

### 1.5 Shadow System
```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Colored Shadows for Depth */
--shadow-primary: 0 4px 20px rgba(37, 99, 235, 0.15);
--shadow-success: 0 4px 20px rgba(22, 163, 74, 0.15);
--shadow-warning: 0 4px 20px rgba(245, 158, 11, 0.15);
--shadow-danger: 0 4px 20px rgba(220, 38, 38, 0.15);
```

### 1.6 Layout Dimensions
```css
/* Sidebar */
--sidebar-width: 280px;
--sidebar-collapsed-width: 72px;
--sidebar-header-height: 72px;

/* Navbar */
--navbar-height: 72px;

/* Content */
--content-max-width: 1400px;
--content-padding: 32px;

/* Components */
--card-padding: 24px;
--input-height: 44px;
--button-height: 44px;
--table-row-height: 56px;
```

### 1.7 Animation System
```css
/* Transitions */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

---

## 2. Component Library Specifications

### 2.1 Buttons
```typescript
// Primary Button
<Button variant="primary" size="md">
  Submit
</Button>

// Secondary Button
<Button variant="secondary" size="md">
  Cancel
</Button>

// Ghost Button
<Button variant="ghost" size="md">
  Learn More
</Button>

// Destructive Button
<Button variant="danger" size="md">
  Delete
</Button>

// Button Sizes
size="sm"  // 36px height
size="md"  // 44px height (default)
size="lg"  // 52px height
```

**Button Design Specs:**
- Border radius: 10px
- Font weight: 500
- Padding: 0 24px
- Icon spacing: 8px
- Hover: 5% darker shade
- Active: Scale 0.98
- Loading: Spinner 16px

### 2.2 Cards
```typescript
<Card variant="default" padding="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    {/* Actions */}
  </CardFooter>
</Card>

// Card Variants
variant="default"  // White with subtle border
variant="elevated"  // With shadow
variant="outlined"  // Border only
variant="ghost"  // No background
```

**Card Design Specs:**
- Border radius: 16px
- Padding: 24px
- Border: 1px solid #E2E8F0
- Background: #FFFFFF
- Hover: Shadow-lg
- Transition: 200ms ease

### 2.3 Inputs
```typescript
<Input 
  type="text"
  placeholder="Enter text..."
  size="md"
  state="default"
/>

// Input Sizes
size="sm"  // 36px height
size="md"  // 44px height (default)
size="lg"  // 52px height

// Input States
state="default"    // Normal
state="focus"      // Blue ring
state="error"      // Red border
state="disabled"   // Gray
state="success"    // Green border
```

**Input Design Specs:**
- Border radius: 10px
- Border: 1px solid #E2E8F0
- Background: #FFFFFF
- Focus: Ring 2px #2563EB
- Error: Border #DC2626
- Padding: 0 16px
- Font size: 14px

### 2.4 Tables
```typescript
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IconButton><MoreVertical /></IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Table Design Specs:**
- Row height: 56px
- Header background: #F8FAFC
- Header font: 12px, 600, uppercase
- Border bottom: 1px solid #E2E8F0
- Hover row: #F8FAFC
- Sticky header: Top 0
- Sortable: Ascending/Descending indicators

### 2.5 Status Badges
```typescript
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Blocked</Badge>
<Badge variant="info">In Review</Badge>
<Badge variant="neutral">Draft</Badge>
```

**Badge Design Specs:**
- Border radius: 6px
- Padding: 4px 12px
- Font: 12px, 500
- Success: #DCFCE7 bg, #16A34A text
- Warning: #FEF3C7 bg, #F59E0B text
- Danger: #FEE2E2 bg, #DC2626 text
- Info: #CFFAFE bg, #0891B2 text
- Neutral: #F1F5F9 bg, #64748B text

### 2.6 Modals
```typescript
<Modal isOpen={open} onClose={onClose} size="md">
  <ModalHeader>
    <ModalTitle>Modal Title</ModalTitle>
    <ModalDescription>Optional description</ModalDescription>
  </ModalHeader>
  <ModalBody>
    {/* Content */}
  </ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={onClose}>Cancel</Button>
    <Button variant="primary" onClick={onConfirm}>Confirm</Button>
  </ModalFooter>
</Modal>

// Modal Sizes
size="sm"  // 400px width
size="md"  // 560px width (default)
size="lg"  // 720px width
size="xl"  // 960px width
size="full"  // Full width with padding
```

**Modal Design Specs:**
- Border radius: 16px
- Padding: 24px
- Backdrop: rgba(15, 23, 42, 0.5)
- Animation: scaleIn
- Close button: Top right, 16px
- Max height: 90vh
- Scrollable body

### 2.7 Dropdowns
```typescript
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <MoreVertical />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="danger">
      <LogOut className="mr-2 h-4 w-4" />
      <span>Logout</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**Dropdown Design Specs:**
- Border radius: 10px
- Border: 1px solid #E2E8F0
- Shadow: xl
- Padding: 8px
- Item height: 40px
- Hover: #F8FAFC
- Separator: 1px solid #E2E8F0

### 2.8 Loading States
```typescript
// Skeleton Loader
<Skeleton className="h-12 w-full" />
<Skeleton className="h-4 w-3/4" />

// Loading Spinner
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />

// Page Loading
<PageLoader />
```

**Skeleton Design Specs:**
- Background: Linear gradient shimmer
- Animation: shimmer 1.5s infinite
- Border radius: Same as target element
- Base color: #F1F5F9
- Highlight: #FFFFFF

### 2.9 Empty States
```typescript
<EmptyState
  icon={Inbox}
  title="No data found"
  description="Get started by creating your first item"
  action={
    <Button variant="primary">
      Create New
    </Button>
  }
/>
```

**Empty State Design Specs:**
- Icon size: 64px
- Icon color: #CBD5E1
- Title font: 18px, 600
- Description font: 14px, 400
- Centered layout
- Padding: 64px 32px

### 2.10 Notifications/Toasts
```typescript
<Toast variant="success" title="Success">
  Changes saved successfully
</Toast>

<Toast variant="error" title="Error">
  Something went wrong
</Toast>

<Toast variant="warning" title="Warning">
  Please review your input
</Toast>
```

**Toast Design Specs:**
- Border radius: 10px
- Padding: 16px
- Shadow: lg
- Width: 380px
- Position: Top-right
- Animation: slideIn right
- Auto-dismiss: 5s
- Icon: Left side

---

## 3. Layout Redesign Specifications

### 3.1 Sidebar Navigation (280px)

**Current Issues:**
- Dark header contrasts with light theme
- Simple active state lacks visual depth
- No collapsible sections
- Missing quick actions
- No keyboard navigation support

**Redesign Specifications:**

```typescript
<Sidebar width={280}>
  {/* Logo Section */}
  <SidebarHeader>
    <Logo variant="compact" />
    <CollapseButton />
  </SidebarHeader>

  {/* Navigation */}
  <SidebarNavigation>
    {/* Main Section */}
    <NavSection title="Main">
      <NavItem 
        icon={LayoutDashboard}
        label="Overview"
        path="/admin/overview"
        active={isActive}
        badge={3}
      />
      <NavItem 
        icon={Users}
        label="Users"
        path="/admin/users"
        active={isActive}
      />
    </NavSection>

    {/* Operations Section */}
    <NavSection title="Operations" collapsible defaultOpen>
      <NavItem 
        icon={FileText}
        label="Filings"
        path="/admin/filings"
        submenu={[
          { label: 'ITR Filings', path: '/admin/filings/itr' },
          { label: 'GST Filings', path: '/admin/filings/gst' },
          { label: 'MCA Filings', path: '/admin/filings/mca' }
        ]}
      />
      <NavItem 
        icon={FolderOpen}
        label="Documents"
        path="/admin/documents"
      />
    </NavSection>

    {/* Finance Section */}
    <NavSection title="Finance" collapsible>
      <NavItem 
        icon={CreditCard}
        label="Payments"
        path="/admin/payments"
      />
      <NavItem 
        icon={Receipt}
        label="Invoices"
        path="/admin/invoices"
      />
    </NavSection>
  </SidebarNavigation>

  {/* User Section */}
  <SidebarFooter>
    <QuickActions />
    <UserProfile compact />
  </SidebarFooter>
</Sidebar>
```

**Sidebar Design Specs:**
- Width: 280px (expanded), 72px (collapsed)
- Background: #FFFFFF
- Border: 1px solid #E2E8F0 (right side)
- Active item: #EFF6FF bg, #2563EB text, left border 3px
- Hover item: #F8FAFC bg
- Section title: 12px, 600, #64748B, uppercase, 16px top padding
- Icon size: 20px
- Item height: 44px
- Padding: 0 16px
- Badge: 20px, 12px, 600, #DC2626 bg, white text
- Collapsed: Icons only, tooltips on hover
- Animation: 200ms ease width transition

### 3.2 Top Navbar (72px)

**Current Issues:**
- Dark theme breaks consistency
- No search functionality
- Missing notifications
- Basic profile dropdown
- No breadcrumbs

**Redesign Specifications:**

```typescript
<Navbar height={72}>
  {/* Left Section */}
  <NavbarLeft>
    <MenuButton />
    <Breadcrumb>
      <BreadcrumbItem href="/admin">Dashboard</BreadcrumbItem>
      <BreadcrumbItem href="/admin/users">Users</BreadcrumbItem>
      <BreadcrumbItem current>Management</BreadcrumbItem>
    </Breadcrumb>
  </NavbarLeft>

  {/* Center Section - Search */}
  <NavbarCenter>
    <GlobalSearch 
      placeholder="Search users, filings, documents..."
      shortcut="⌘K"
    />
  </NavbarCenter>

  {/* Right Section */}
  <NavbarRight>
    <HelpButton />
    <NotificationButton badge={5} />
    <ProfileDropdown>
      <DropdownMenuTrigger>
        <Avatar src={user.avatar} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-xs text-muted">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="danger">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </ProfileDropdown>
  </NavbarRight>
</Navbar>
```

**Navbar Design Specs:**
- Height: 72px
- Background: #FFFFFF
- Border: 1px solid #E2E8F0 (bottom)
- Shadow: xs
- Search width: 400px (desktop), 100% (mobile)
- Search icon: Left, 16px
- Search background: #F8FAFC
- Notification badge: 18px, 12px, 600, #DC2626
- Avatar: 40px, rounded-full
- Dropdown: 280px width, shadow-xl

---

## 4. Page-by-Page Redesign Recommendations

### 4.1 Dashboard / Overview Page

**Current Issues:**
- Stats cards lack visual hierarchy
- Charts are placeholders
- No date range selector
- Missing quick actions
- Limited interactivity

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Dashboard                              [Date Range ▼]        │
│  Platform overview and key metrics                             │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ 10,247   │ │ 1,543    │ │ 892      │ │ ₹24.5L   │      │
│  │ +12% ↑   │ │ +8% ↑    │ │ +15% ↑   │ │ +18% ↑   │      │
│  │ Users    │ │ Filings  │ │ Documents│ │ Revenue  │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  ┌──────────┐ ┌──────────┐                                   │
│  │ 47       │ │ 99.2%    │                                   │
│  │ -5% ↓    │ │ +0.3% ↑  │                                   │
│  │ Notices  │ │ AI Acc.  │                                   │
│  └──────────┘ └──────────┘                                   │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────┐ ┌─────────────────────────┐    │
│  │  Revenue Trend (MTD)    │ │  Filing Distribution     │    │
│  │  [Line Chart]           │ │  [Donut Chart]           │    │
│  │  ₹24.5L this month      │ │  ITR: 45%                │    │
│  │  +18% vs last month     │ │  GST: 35%                │    │
│  └─────────────────────────┘ └─────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────┐ ┌─────────────────────────┐    │
│  │  Recent Activity       │ │  Filing Queue           │    │
│  │  ┌───────────────────┐ │ │  ┌───────────────────┐ │    │
│  │  │ Rajesh K.         │ │ │  │ ITR-1            │ │    │
│  │  │ Uploaded Form 16  │ │ │  │ Vikram M.        │ │    │
│  │  │ 2 mins ago ✓      │ │ │  │ High Priority    │ │    │
│  │  └───────────────────┘ │ │  │ CA Ramesh        │ │    │
│  │  ┌───────────────────┐ │ │  └───────────────────┘ │    │
│  │  │ Priya S.          │ │ │  ┌───────────────────┐ │    │
│  │  │ Filed GSTR-3B     │ │ │  │ GSTR-3B          │ │    │
│  │  │ 5 mins ago ✓      │ │ │  │ Ananya S.        │ │    │
│  │  └───────────────────┘ │ │  │ Medium Priority  │ │    │
│  │  [View All Activity →]│ │  └───────────────────┘ │    │
│  └─────────────────────────┘ └─────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│  Quick Actions: [+ User] [+ Filing] [+ Document] [+ Notice] │
└─────────────────────────────────────────────────────────────┘
```

**Dashboard Design Specs:**
- Stats grid: 6 cards (3x2 on desktop, 2x3 on tablet, 1x6 mobile)
- Card padding: 24px
- Card border: 1px solid #E2E8F0
- Card hover: Shadow-lg, translateY(-2px)
- Chart height: 300px
- Activity list: Max 5 items, load more button
- Filing queue: 3-5 cards, priority badges
- Quick actions: 4 buttons, icon + label
- Date range: Last 7 days, 30 days, 90 days, custom

### 4.2 User Management Page

**Current Issues:**
- Complex filter panel not intuitive
- Table lacks sorting and column customization
- No bulk actions UI
- Missing user lifecycle stages
- Limited search capabilities

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Users Management                               [+ Add User] │
│  Manage user accounts, roles, and permissions                 │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ 🔍 Search users...                                [⌘K] │ │
│  │ [Filters ▼] [Columns ▼] [Export ▼]                      │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  Filters: [Role ▼] [Status ▼] [Service ▼] [Date ▼]          │
│                                                              │
│  ┌──────┬─────────────────┬───────────┬──────────┬────────┐ │
│  │ ☐    │ User            │ Role      │ Status   │ Actions│ │
│  ├──────┼─────────────────┼───────────┼──────────┼────────┤ │
│  │ ☐    │ Rajesh Kumar    │ Client    │ ● Active│ [⋮]   │ │
│  │      │ rajesh@tech...  │ GST, ITR  │          │        │ │
│  │      │ Last: 2m ago    │           │          │        │ │
│  ├──────┼─────────────────┼───────────┼──────────┼────────┤ │
│  │ ☐    │ Priya Sharma    │ GST Expert│ ● Active│ [⋮]   │ │
│  │      │ priya@expert... │ GST, Audit│          │        │ │
│  │      │ Last: 1h ago    │           │          │        │ │
│  ├──────┼─────────────────┼───────────┼──────────┼────────┤ │
│  │ ☐    │ Amit Patel      │ Manager   │ ○ Inactive│ [⋮]   │ │
│  │      │ amit@corp...    │ MCA, Audit│          │        │ │
│  │      │ Last: 2d ago    │           │          │        │ │
│  └──────┴─────────────────┴───────────┴──────────┴────────┘ │
│                                                              │
│  Bulk Actions: [Activate] [Deactivate] [Delete] [Assign]   │
│                                                              │
│  Showing 1-10 of 1,247 users  [<] 1 2 3 4 5 [>]              │
└─────────────────────────────────────────────────────────────┘
```

**User Management Design Specs:**
- Search: Full width, placeholder text, keyboard shortcut
- Filters: Collapsible panel, 4-6 filters, clear all button
- Columns: Customizable via dropdown, drag to reorder
- Table: Sticky header, sortable columns, row hover
- Bulk actions: Appears when rows selected, disabled otherwise
- Status: ● Active (green), ○ Inactive (gray), ● Blocked (red)
- Avatar: 40px, initials if no image
- Actions: Dropdown menu with Edit, View, Delete, Block, Assign
- Pagination: 10, 25, 50 per page options

### 4.3 Team Management (Employees, Roles, Permissions)

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Team Management                          [+ Add Employee]    │
│  Manage team members, roles, and access controls              │
├─────────────────────────────────────────────────────────────┤
│  [Employees] [Roles] [Permissions] [Departments]             │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Employee Directory                                      │ │
│  │ ┌────┬─────────────┬──────────┬──────────┬───────────┐ │ │
│  │ │Avatar│ Name        │ Role     │ Department│ Status    │ │ │
│  │ ├────┼─────────────┼──────────┼──────────┼───────────┤ │ │
│  │ │ RK  │ Rajesh Kumar│ Senior CA │ Taxation │ ● Active  │ │ │
│  │ │ PS  │ Priya S.    │ GST Expert│ GST       │ ● Active  │ │ │
│  │ │ AP  │ Amit Patel  │ Manager   │ Audit     │ ○ Away    │ │ │
│  │ └────┴─────────────┴──────────┴──────────┴───────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Role & Permission Matrix                                  │ │
│  │ ┌──────────┬──────┬──────┬──────┬──────┬──────┬──────┐ │ │
│  │ │ Role     │ Users│ Filings│ Docs │ Reports│ Settings│ │ │
│  │ ├──────────┼──────┼──────┼──────┼──────┼──────┼──────┤ │ │
│  │ │ Admin    │ ✓✓   │ ✓✓   │ ✓✓   │ ✓✓   │ ✓✓   │ ✓✓   │ │ │
│  │ │ Manager  │ ✓✓   │ ✓✓   │ ✓    │ ✓✓   │ ✓    │ ✓    │ │ │
│  │ │ CA       │ ✓    │ ✓✓   │ ✓✓   │ ✓    │      │      │ │ │
│  │ │ Client   │ ✓    │ ✓    │ ✓    │      │      │      │ │ │
│  │ └──────────┴──────┴──────┴──────┴──────┴──────┴──────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Team Management Design Specs:**
- Tabs: Employees, Roles, Permissions, Departments
- Employee cards: Avatar, name, role, department, status
- Permission matrix: Checkbox grid, role rows, module columns
- Permission levels: ✓ Full, ✓ Partial, ( ) None
- Status indicators: ● Active (green), ○ Away (yellow), ○ Offline (gray)
- Department badges: Color-coded by department
- Quick actions: Edit role, View permissions, Deactivate

### 4.4 Consultation / Service Delivery

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Consultations                               [+ New Booking] │
│  Manage consultation bookings and service delivery            │
├─────────────────────────────────────────────────────────────┤
│  [All] [Pending] [Confirmed] [Completed] [Cancelled]         │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ 🔍 Search consultations...                             │ │
│  │ [Date ▼] [Type ▼] [Status ▼] [Export ▼]                │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ ┌──────────────┬─────────────┬──────────┬────────────┐ │ │
│  │ │ Client       │ Consultation │ Date     │ Status     │ │ │
│  │ ├──────────────┼─────────────┼──────────┼────────────┤ │ │
│  │ │ Rajesh K.    │ GST Filing   │ Oct 15   │ ⏳ Pending │ │ │
│  │ │ rajesh@...   │ with CA     │ 10:00 AM │            │ │ │
│  │ │ [View] [Edit]│             │          │ [Confirm]  │ │ │
│  │ ├──────────────┼─────────────┼──────────┼────────────┤ │ │
│  │ │ Priya S.     │ ITR Review   │ Oct 16   │ ✓ Confirmed│ │ │
│  │ │ priya@...    │             │ 2:00 PM  │            │ │ │
│  │ │ [View] [Edit]│             │          │ [Complete] │ │ │
│  │ └──────────────┴─────────────┴──────────┴────────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  Calendar View [List] [Calendar] [Timeline]                  │
└─────────────────────────────────────────────────────────────┘
```

**Consultation Design Specs:**
- Status tabs: Pills with counts
- Calendar view: Month/week/day, drag to reschedule
- Timeline view: Gantt-style, color by status
- Client info: Avatar, name, email, phone
- Consultation details: Type, duration, mode (Zoom/Phone/In-person)
- Action buttons: Confirm, Complete, Cancel, Reschedule
- Meeting link: Clickable, opens in new tab
- Notes: Expandable, rich text support

### 4.5 Clients / CRM (Customers, Leads)

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  CRM                                         [+ Add Customer] │
│  Manage customers, leads, and relationships                   │
├─────────────────────────────────────────────────────────────┤
│  [Customers] [Leads] [Pipeline] [Deals] [Activities]         │
├─────────────────────────────────────────────────────────────┤
│  Pipeline: New → Qualified → Proposal → Negotiation → Won/Lost│
│                                                              │
│  ┌──────────────┬──────────────┬──────────────┬────────────┐ │
│  │ │ New (12)     │ Qualified (8)│ Proposal (5) │ Won (23)   │ │
│  │ │ [Card]       │ [Card]       │ [Card]       │ [Card]     │ │ │
│  │ │ [Card]       │ [Card]       │ [Card]       │            │ │ │
│  └──────────────┴──────────────┴──────────────┴────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Customer 360 View                                        │ │
│  │ ┌─────────────┬─────────────────────────────────────────┐│ │
│  │ │ Company     │ ABC Corporation                         ││ │
│  │ │ Contact     │ John Doe +91 98765 43210                ││ │
│  │ │ Email       │ john@abccorp.com                         ││ │
│  │ │ Revenue     │ ₹2.5L / year                             ││ │
│  │ │ Services    │ GST, ITR, Audit                          ││ │
│  │ │ Status      │ ● Active                                ││ │
│  │ └─────────────┴─────────────────────────────────────────┘│ │
│  │ Timeline: [Activity Feed]                                │ │
│  │ Documents: [File List]                                   │ │
│  │ Communications: [Email History]                           │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**CRM Design Specs:**
- Pipeline: Kanban columns, drag and drop
- Deal cards: Value, probability, owner, due date
- Customer 360: Comprehensive profile view
- Activity feed: Timeline of all interactions
- Document management: Upload, view, share
- Communication: Email integration, notes
- Tags: Custom tags for segmentation
- Search: Advanced filters, saved searches

### 4.6 Financial Pages (Payments, Billing)

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Payments & Billing                         [+ Record Payment]│
│  Track transactions, invoices, and billing                     │
├─────────────────────────────────────────────────────────────┤
│  ┌────────────┬────────────┬────────────┬────────────┬──────┐ │
│  │ ₹24.5L     │ ₹18.2L     │ ₹6.3L      │ 1,247      │ 98.2% │ │
│  │ Revenue    │ Collected   │ Pending    │ Invoices   │ Rate  │ │
│  │ +18% ↑     │ +15% ↑     │ +22% ↑     │ +12% ↑     │       │ │
│  └────────────┴────────────┴────────────┴────────────┴──────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Revenue Chart (Last 12 months)                           │ │
│  │ [Bar/Line Chart showing monthly revenue]                  │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Recent Transactions                                      │ │
│  │ ┌──────────┬──────────┬──────────┬──────────┬──────────┐│ │
│  │ │ Invoice  │ Client   │ Amount   │ Status   │ Actions  ││ │
│  │ ├──────────┼──────────┼──────────┼──────────┼──────────┤│ │
│  │ │ INV-001  │ ABC Corp │ ₹15,000  │ ✓ Paid   │ [⋮]     ││ │
│  │ │ INV-002  │ XYZ Ltd  │ ₹8,500   │ ⏳ Pending│ [⋮]     ││ │
│  │ └──────────┴──────────┴──────────┴──────────┴──────────┘│ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  [All] [Paid] [Pending] [Overdue] [Refunded]                │
└─────────────────────────────────────────────────────────────┘
```

**Financial Design Specs:**
- KPI cards: Revenue, collected, pending, invoices, collection rate
- Charts: Revenue trend, payment methods, aging report
- Transaction table: Invoice #, client, amount, status, due date
- Status badges: ✓ Paid (green), ⏳ Pending (yellow), ⚠ Overdue (red)
- Actions: View invoice, send reminder, record payment, download PDF
- Filters: Date range, client, status, amount range
- Export: CSV, PDF, Excel formats

### 4.7 Document & Filing Management

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Documents & Filings                        [+ Upload Document]│
│  Manage documents and track compliance filings                │
├─────────────────────────────────────────────────────────────┤
│  [All Documents] [ITR] [GST] [MCA] [Audit] [Other]           │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ 🔍 Search documents... [Advanced Filters ▼]              │ │
│  │ [Upload ▼] [Create Folder ▼] [Bulk Actions ▼]            │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ 📁 Documents                                            │ │
│  │ ┌────────────┬──────────────┬──────────┬──────────────┐ │ │
│  │ │ Name       │ Type         │ Size     │ Modified     │ │ │
│  │ ├────────────┼──────────────┼──────────┼──────────────┤ │ │
│  │ │ 📁 ITR_2024│ Folder       │ -        │ Today       │ │ │
│  │ │   📄 Form16│ PDF          │ 2.3MB    │ 2h ago      │ │ │
│  │ │   📄 Form16A│ PDF          │ 1.8MB    │ 2h ago      │ │ │
│  │ ├────────────┼──────────────┼──────────┼──────────────┤ │ │
│  │ │ 📁 GST_2024│ Folder       │ -        │ Yesterday   │ │ │
│  │ │   📄 GSTR-3B│ PDF          │ 3.1MB    │ 1d ago      │ │ │
│  │ └────────────┴──────────────┴──────────┴──────────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Filing Status                                            │ │
│  │ ┌──────────┬──────────┬──────────┬──────────┬──────────┐ │ │
│  │ │ Type     │ Client   │ Status   │ Due Date │ Actions  │ │ │
│  │ ├──────────┼──────────┼──────────┼──────────┼──────────┤ │ │
│  │ │ ITR-1    │ Rajesh K.│ ⏳ Pending│ Oct 31   │ [File]   │ │ │
│  │ │ GSTR-3B  │ Priya S. │ ✓ Filed  │ Oct 20   │ [View]   │ │ │
│  │ │ AOC-4    │ ABC Corp │ ⚠ Overdue│ Oct 15   │ [File]   │ │ │
│  │ └──────────┴──────────┴──────────┴──────────┴──────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Document Design Specs:**
- File browser: Tree view, folder navigation
- File icons: Color-coded by type (PDF, Excel, Word, Image)
- File cards: Preview, name, size, modified date
- Upload: Drag and drop, progress indicator
- Versioning: Version history, restore previous
- Sharing: Share links, permissions, expiration
- Filing status: Dashboard view, deadline tracking
- Compliance alerts: Overdue warnings, automated reminders

### 4.8 Task & Workflow Management

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Tasks & Workflows                           [+ Create Task]  │
│  Orchestrate workflows and track task completion              │
├─────────────────────────────────────────────────────────────┤
│  [Kanban] [List] [Timeline] [Calendar]                       │
│                                                              │
│  ┌──────────────┬──────────────┬──────────────┬──────────────┐│
│  │ To Do (5)    │ In Progress (3)│ Review (2)    │ Done (15)   ││
│  │ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ ││
│  │ │Task Card │ │ │Task Card │ │ │Task Card │ │ │Task Card │ ││
│  │ │          │ │ │          │ │ │          │ │ │          │ ││
│  │ │[+ Add]   │ │ │          │ │ │          │ │ │          │ ││
│  │ └──────────┘ │ └──────────┘ │ └──────────┘ │ └──────────┘ ││
│  └──────────────┴──────────────┴──────────────┴──────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Task Details                                             │ │
│  │ Title: GSTR-3B Reconciliation for Malhotra Tech           │ │
│  │ Client: Malhotra Technologies Pvt Ltd                   │ │
│  │ Assigned: Sonal Gupta                                    │ │
│  │ Priority: 🔴 Critical                                    │ │
│  │ Due: Oct 11, 2024                                        │ │
│  │ Progress: ████████░░ 80%                                 │ │
│  │ Subtasks: [✓] Collect data [✓] Reconcile [ ] Finalize   │ │
│  │ Attachments: [File1.pdf] [File2.xlsx]                    │ │
│  │ Comments: [Activity feed]                                │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  Workflow Automation: [+ Create Workflow]                    │
└─────────────────────────────────────────────────────────────┘
```

**Task Management Design Specs:**
- Kanban: Drag and drop, column limits
- Task cards: Priority badge, assignee avatar, due date, progress
- Task details: Full screen modal, tabs for details/comments/files
- Subtasks: Checklist, progress tracking
- Assignees: Multiple assignees, avatar stack
- Due dates: Calendar picker, overdue warnings
- Priority: Critical (red), High (orange), Medium (blue), Low (gray)
- Workflow: Visual workflow builder, trigger-based automation

### 4.9 Analytics & Reports

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Analytics & Reports                         [+ Custom Report]│
│  Business intelligence and performance metrics                │
├─────────────────────────────────────────────────────────────┤
│  [Overview] [Revenue] [Users] [Compliance] [Custom]           │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Period: [Last 30 days ▼] Compare: [Previous period ▼]    │ │
│  │ [Export ▼] [Schedule ▼] [Share ▼]                        │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Key Metrics                                             │ │
│  │ ┌──────────┬──────────┬──────────┬──────────┬──────────┐│ │
│  │ │ Revenue  │ Users     │ Filings  │ Compliance│ Growth   ││ │
│  │ │ ₹24.5L   │ 10,247   │ 1,543    │ 98.2%    │ +18%     ││ │
│  │ │ +18% ↑   │ +12% ↑   │ +8% ↑    │ +0.3% ↑  │          ││ │
│  │ └──────────┴──────────┴──────────┴──────────┴──────────┘│ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Revenue Trend                                           │ │
│  │ [Line chart showing monthly revenue with comparison]      │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Filing Distribution                                      │ │
│  │ [Donut chart: ITR 45%, GST 35%, MCA 15%, Other 5%]       │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Team Performance                                        │ │
│  │ [Bar chart showing individual CA performance]              │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Analytics Design Specs:**
- Date range: Predefined options, custom picker
- Comparison: Previous period, year-over-year
- KPI cards: Sparkline mini-charts, trend indicators
- Charts: Interactive, tooltips, drill-down
- Export: PDF, Excel, CSV, image
- Scheduled reports: Email delivery, frequency
- Custom dashboards: Drag and drop widgets
- Real-time updates: WebSocket for live data

### 4.10 Settings & Profile

**Redesign Specifications:**

```
┌─────────────────────────────────────────────────────────────┐
│  Settings                                                  │
│  Configure account, preferences, and integrations            │
├─────────────────────────────────────────────────────────────┤
│  [Profile] [Account] [Security] [Notifications] [Integrations]│
│                                                              │
│  ┌──────────────┬─────────────────────────────────────────┐  │
│  │ Profile      │                                         │  │
│  │              │ ┌─────────────────────────────────┐    │  │
│  │              │ │ Avatar: [Upload 100x100]          │    │  │
│  │              │ │ Name: [Rajesh Kumar]              │    │  │
│  │              │ │ Email: [rajesh@techflow.ai]      │    │  │
│  │              │ │ Phone: [+91 98765 43210]         │    │  │
│  │              │ │ Timezone: [Asia/Kolkata ▼]       │    │  │
│  │              │ │ Language: [English ▼]            │    │  │
│  │              │ └─────────────────────────────────┘    │  │
│  │              │ [Save Changes]                          │  │
│  │              │                                         │  │
│  │ Security     │ ┌─────────────────────────────────┐    │  │
│  │              │ │ Password: [Change Password]      │    │  │
│  │              │ │ 2FA: [Enable/Disable]             │    │  │
│  │              │ │ Sessions: [Manage active sessions]│    │  │
│  │              │ │ Login History: [View]             │    │  │
│  │              │ └─────────────────────────────────┘    │  │
│  │              │                                         │  │
│  │ Notifications│ ┌─────────────────────────────────┐    │  │
│  │              │ │ Email: [☑] New users              │    │  │
│  │              │ │        [☑] Failed payments        │    │  │
│  │              │ │        [☑] System errors          │    │  │
│  │              │ │ SMS: [☐] Critical alerts         │    │  │
│  │              │ │      [☐] Daily summary           │    │  │
│  │              │ └─────────────────────────────────┘    │  │
│  │              │                                         │  │
│  │ Integrations│ ┌─────────────────────────────────┐    │  │
│  │              │ │ Income Tax API: [Connected ✓]    │    │  │
│  │              │ │ GST Portal API: [Connected ✓]    │    │  │
│  │              │ │ Payment Gateway: [Configure →]   │    │  │
│  │              │ │ Email Service: [SendGrid →]      │    │  │
│  │              │ └─────────────────────────────────┘    │  │
│  └──────────────┴─────────────────────────────────────────┘  │
│                                                              │
│  [Save All Changes] [Reset to Defaults]                      │
└─────────────────────────────────────────────────────────────┘
```

**Settings Design Specs:**
- Navigation: Left sidebar with icons, active state
- Sections: Grouped logically with separators
- Forms: Labeled inputs, validation indicators
- Toggle switches: Smooth animation, clear on/off states
- Save buttons: Primary action, sticky bottom on mobile
- Danger zones: Red accent, confirmation dialogs
- Profile: Avatar upload with preview, crop tool
- Security: Password strength meter, 2FA QR code
- Notifications: Email/SMS preferences, frequency options

---

## 5. Responsive Design Specifications

### 5.1 Breakpoints
```css
--breakpoint-xs: 375px;   /* Mobile */
--breakpoint-sm: 640px;   /* Mobile Large */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Desktop Large */
--breakpoint-2xl: 1536px; /* Desktop XL */
```

### 5.2 Mobile Navigation (< 768px)

**Specifications:**
- Sidebar: Hidden, accessible via hamburger menu
- Navbar: Simplified, search icon only
- Tables: Horizontal scroll or card view
- Cards: Full width, stacked
- Modals: Full screen with backdrop
- Filters: Bottom sheet or accordion
- Actions: Bottom action bar (fixed)

### 5.3 Tablet (768px - 1024px)

**Specifications:**
- Sidebar: Collapsible to icons only
- Tables: Responsive, scrollable
- Grid: 2 columns instead of 3-4
- Charts: Reduced complexity
- Forms: Single column

### 5.4 Desktop (> 1024px)

**Specifications:**
- Sidebar: Full width 280px
- Tables: Full width, all columns visible
- Grid: 3-4 columns
- Charts: Full features
- Forms: Multi-column where appropriate

---

## 6. Accessibility Specifications

### 6.1 WCAG 2.1 AA Compliance

**Color Contrast:**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Keyboard Navigation:**
- All interactive elements: Tab accessible
- Focus indicators: Visible outline (2px, #2563EB)
- Skip links: "Skip to main content"
- Keyboard shortcuts: Documented in help

**Screen Reader Support:**
- ARIA labels: All icons and buttons
- Alt text: All images
- Semantic HTML: Proper heading hierarchy
- Form labels: Associated with inputs

**Focus Management:**
- Modals: Trap focus within modal
- Dropdowns: Close on Escape
- Focus order: Logical left-to-right, top-to-bottom

---

## 7. Performance Optimizations

### 7.1 Loading States
- Skeleton loaders: For all data-heavy components
- Progressive loading: Load critical content first
- Lazy loading: Images, charts below fold
- Code splitting: Route-based chunks

### 7.2 Optimizations
- Image optimization: WebP format, lazy loading
- Virtual scrolling: Long lists (100+ items)
- Debounced search: 300ms delay
- Memoization: Expensive computations
- Caching: API responses, static assets

---

## 8. Implementation Priority

### Phase 1: Foundation (Week 1-2)
1. Design system variables and tokens
2. Base components (Button, Input, Card, Badge)
3. Layout components (Sidebar, Navbar)
4. Typography and color system

### Phase 2: Core Pages (Week 3-4)
1. Dashboard/Overview
2. User Management
3. Team Management
4. Settings

### Phase 3: Business Pages (Week 5-6)
1. Consultation/Service Delivery
2. CRM (Customers, Leads)
3. Financial Pages
4. Document Management

### Phase 4: Advanced Features (Week 7-8)
1. Task & Workflow Management
2. Analytics & Reports
3. Advanced filters and search
4. Export and automation

### Phase 5: Polish (Week 9-10)
1. Responsive optimization
2. Accessibility audit
3. Performance optimization
4. User testing and iterations

---

## 9. Component File Structure

```
components/
├── ui/                          # Base UI components
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── table.tsx
│   ├── modal.tsx
│   ├── dropdown.tsx
│   ├── select.tsx
│   ├── checkbox.tsx
│   ├── switch.tsx
│   └── avatar.tsx
├── layout/                      # Layout components
│   ├── sidebar.tsx
│   ├── navbar.tsx
│   ├── breadcrumb.tsx
│   └── container.tsx
├── dashboard/                   # Dashboard specific
│   ├── stat-card.tsx
│   ├── activity-feed.tsx
│   ├── chart-container.tsx
│   └── kpi-widget.tsx
├── tables/                      # Table components
│   ├── data-table.tsx
│   ├── sortable-table.tsx
│   └── filterable-table.tsx
├── forms/                       # Form components
│   ├── form-field.tsx
│   ├── form-group.tsx
│   └── search-input.tsx
├── feedback/                    # Feedback components
│   ├── toast.tsx
│   ├── alert.tsx
│   ├── empty-state.tsx
│   └── loading-skeleton.tsx
└── navigation/                  # Navigation
    ├── nav-item.tsx
    ├── nav-section.tsx
    └── tab-group.tsx
```

---

## 10. Design Tokens (CSS Variables)

```css
:root {
  /* Spacing */
  --spacing-0: 0;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;

  /* Colors */
  --color-bg-primary: #F8FAFC;
  --color-bg-card: #FFFFFF;
  --color-bg-hover: #F1F5F9;
  --color-bg-active: #E2E8F0;
  
  --color-text-primary: #0F172A;
  --color-text-secondary: #64748B;
  --color-text-tertiary: #94A3B8;
  --color-text-muted: #CBD5E1;
  
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-primary-light: #EFF6FF;
  
  --color-success: #16A34A;
  --color-success-light: #DCFCE7;
  
  --color-warning: #F59E0B;
  --color-warning-light: #FEF3C7;
  
  --color-danger: #DC2626;
  --color-danger-light: #FEE2E2;
  
  --color-border: #E2E8F0;
  --color-border-light: #F1F5F9;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-Index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}
```

---

## Summary

This comprehensive redesign specification provides:

1. **Design System Foundation**: Complete typography, color, spacing, and component specifications
2. **20 Page Redesigns**: Detailed mockups and specifications for each page
3. **Component Library**: 10+ reusable components with design specs
4. **Layout System**: Modern sidebar and navbar with full specifications
5. **Responsive Design**: Mobile, tablet, and desktop breakpoints
6. **Accessibility**: WCAG 2.1 AA compliance guidelines
7. **Performance**: Loading states, optimizations, and best practices
8. **Implementation Plan**: 10-week phased approach
9. **File Structure**: Organized component architecture
10. **Design Tokens**: CSS variables for consistent styling

The design follows modern 2026 SaaS trends inspired by Linear, Stripe, Notion, HubSpot, Hostinger, and Vercel, ensuring a premium, professional, and enterprise-grade user experience.
