class FormHandler {
  private loading: boolean = false;

  constructor(
    private setForm: React.SetStateAction<any>,
    private API_URL: string,
    private router: any
  ) {}

  trakeChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    this.setForm((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async submit(
    e: React.FormEvent<HTMLFormElement>,
    formData: any,
    id?: string
  ) {
    e.preventDefault();
    const EDITMODE = !id ? false : id !== "new";
    this.loading = true;
    const url = EDITMODE ? `${this.API_URL}/${id}` : `${this.API_URL}`;
    const method = EDITMODE ? "PUT" : "POST";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      this.loading = false;
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} ticket`);
    }

    this.router.refresh();
    this.router.push("/admin");
  }

  get isLoading(): boolean {
    return this.loading;
  }
}

export default FormHandler;
