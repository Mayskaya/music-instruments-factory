FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build-env
WORKDIR /app

# Setup NodeJs
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y build-essential nodejs

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore --verbosity normal  && \
	dotnet tool install --global dotnet-ef --version 3.0.0 && \
	export PATH="$PATH:/root/.dotnet/tools"

# Copy everything else and build
COPY . ./
RUN export PATH="$PATH:/root/.dotnet/tools" && \ 
	dotnet ef migrations add InitApplicationDb && \ 
	dotnet publish -c Release -o out

## Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "MusicInstrumentsCrm.dll"]