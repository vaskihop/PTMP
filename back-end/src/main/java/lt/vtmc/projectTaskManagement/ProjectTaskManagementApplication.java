package lt.vtmc.projectTaskManagement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.repository.ProjectRepository;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class ProjectTaskManagementApplication {
	
	@Bean
	public Docket swaggerDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.basePackage("lt.vtmc.projectTaskManagement"))
				.build();
	}
		private ApiInfo apiInfo() {
			return new ApiInfoBuilder()
					.title("Dokumentation")
					.version("0.0.1-SNAPSHOT")
					.build();
		}

	public static void main(String[] args) {
		SpringApplication.run(ProjectTaskManagementApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(ProjectRepository repo) {
		return (args)->{
			repo.save(new ProjectEntity("Indu plovimas", "Isplauti visus indus", false, 5, 1));
			repo.save(new ProjectEntity("Vakariene", "Pasigaminti vakariene", false, 5, 4));
		};
		
		
		
	}

}
