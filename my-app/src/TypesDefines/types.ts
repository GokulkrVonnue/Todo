export type Id = number | null;

export interface Task {
  id: Id;
  taskName: string;
  description: string;
  date: String;
}



export interface Filterss {
  id: number;
  filterName: string;
  filterquery: string;
}

export type ValuePiece = Date | null;

export type DayType = ValuePiece | [ValuePiece, ValuePiece];

export type SidePanelProp = {
  onSidepanelMinimize: (x: boolean) => void;
  sidePanel: Boolean;
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
  data: Task[];
};

export type RightMainProp = {
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
  seteditid: (id: Id) => void;
  setEdit: (x: Boolean) => void;
  getData: () => void;
  data: Task[];
  postData: (value: Task) => void;
  editid: Id;
  edit: Boolean;
  deleteData: (id: Id) => void;
  filternameAndquery: (name: string, query: string | undefined) => void;
  filternameData: Filterss[];
  deleteFilter: (x: number) => void;
  LabelNameset: (x: string) => void;
  setData: React.Dispatch<React.SetStateAction<Task[]>>;
  uploadHandle:(value:Task)=>void
};


export type InboxProp = {
  data: Task[];
  postData: (value: Task) => void;
  deleteData: (id: Id) => void;
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  editData: (id:Id) => void;
  edit: Boolean;
  setEdit: (x: Boolean) => void;
  editid: Id;
  uploadData: (value: Task) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
};
export type AddedContentProp = {
  id: number | null;
  task: string;
  des: string;
  deleteData: (id: Id) => void;
  date?: string;
  editData: (id: Id) => void;
  popevent: Boolean;
  setpopevent: (x: boolean) => void;
};

export type AddPopupProp = {
  popevent: boolean;
  setpopevent: (x: boolean) => void;
  postData: (value: Task) => void;
  currentDate: String;
  changeToday: () => void;
  day?: DayType;
  onChange?: (value: DayType) => void;
  onClickDay: () => void;
  edit: Boolean;
  setEdit: (x: Boolean) => void;
};
export type TodayProp = {
  data: Task[];
  postData: (value: Task) => void;
  deleteData: (id: Id) => void;
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  editData: (id:Id) => void;
  edit: Boolean;
  setEdit: (x: Boolean) => void;
  editid: number | null;
  uploadData: (value: Task) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
  totalData: Task[];
};

export type AccountProp = {
  onSidepanelMinimize: (x: boolean) => void;
  sidePanel: Boolean;
};

export type AccountDropdownProp = {
  userName: string;
};

export type AddcontProp = {
  popevent: Boolean;
  setpopevent: (x: boolean) => void;
  postData: (value: Task) => void;
  currentDate: String;
  changeToday?: () => void;
  day?: DayType;
  onChange?: (value: DayType) => void;
  onClickDay: () => void;
};
export type EditTaskProp = {
  
  currentDate: String;
  changeToday?: () => void;
  day?: DayType;
  onChange?: (value: DayType) => void;
  onClickDay: () => void;
  edit: Boolean;
  setEdit: (x: Boolean) => void;
  editid: number | null;
  uploadData: (value: Task) => void;
};

export type FiltertCalanderProp = {
  day?: DayType;
  onChange?: (value: DayType) => void;
  dayClick: () => void;
};

export type FilterProp = {
  filterpop: Boolean;
  setFilter: (x: Boolean) => void;
  filternameAndquery: (name: string, query: string | undefined) => void;
};

export type FIltersLabelsProp = {
  filternameAndquery: (name: string, query: string | undefined) => void;
  filternameData: Filterss[];
  deleteFilter: (x: number) => void;
  LabelNameset: (x: string) => void;
};

export type FlagsPriorityProp = {
  setPriority: (x: string) => void;
  priority: string;
};

export type FliterContentProp = {
  filternameData: Filterss[];
  deleteFilter: (x: number) => void;
};

export type FliterVeiwProps = {
  data: Task[];
};

export type LabelPopProp = {
  labelpop: Boolean;
  setLabel: (x: Boolean) => void;
  LabelNameset: (x: string) => void;
};
export type LabelsProps = {
  LabelNameset: (x: string) => void;
};

export type LinksProp = {
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
  data: Task[];
};

export type SearchTaskProp = {
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
  data: Task[];
};

export type SelectCalanderProp = {
  day?: DayType;
  onChange?: (value: DayType) => void;
  onClickDay: () => void;
};

export type Dateprop = {
  currentDate: String;
  changeToday?: () => void;
  day?: DayType;
  onChange?: (value: DayType) => void;
  onClickDay: () => void;
};

export type TaskVeiw = {
  id: number;
  taskName: string;
  description: string;
  date: string;
};