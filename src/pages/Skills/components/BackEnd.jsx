import SkillsList from "./SkillsList/SkillsList";
import dotNetCoreLogo from "../../../data/dotnet-core.svg";
import aspDotNetLogo from "../../../data/asp-net.svg";
import restAPILogo from "../../../data/restAPI.svg";
import entityFrameworkLogo from "../../../data/entity.svg";

const BackEnd = () => {
  const title = "Back-end Development";
  const listItems = [
    {
      link: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0",
      logo: dotNetCoreLogo,
      content: <strong>.Net Core (C#)</strong>,
    },
    {
      link: "https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started",
      logo: aspDotNetLogo,
      content: <strong>ASP.Net Framework / MVC (C#)</strong>,
    },
    {
      link: "https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0&WT.mc_id=dotnet-35129-website",
      logo: restAPILogo,
      content: <strong>RESTful WebAPI </strong>,
    },
    {
      link: "https://learn.microsoft.com/en-us/ef/",
      logo: entityFrameworkLogo,
      content: <strong>Entity Framework</strong>,
    },
  ];

  return <SkillsList title={title} listItems={listItems} />;
};

export default BackEnd;
