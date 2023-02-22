const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: {
  url: string;
  method: string;
  body: any;
  json?: boolean;
}) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: body && JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const register = async (user: any) => {
  return fetcher({ url: "/api/register", method: "POST", body: user });
};

export const login = async (user: any) => {
  return fetcher({ url: "/api/login", method: "POST", body: user });
};

export const createNewProject = (name: string) => {
  return fetcher({
    url: "/api/project",
    method: "POST",
    body: { name },
  });
};
