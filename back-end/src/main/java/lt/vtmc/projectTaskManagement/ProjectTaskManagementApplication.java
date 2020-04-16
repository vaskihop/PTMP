package lt.vtmc.projectTaskManagement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lt.vtmc.projectTaskManagement.enums.Priority;
import lt.vtmc.projectTaskManagement.enums.State;
import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.model.TaskEntity;
import lt.vtmc.projectTaskManagement.repository.ProjectRepository;
import lt.vtmc.projectTaskManagement.repository.TaskRepository;
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
	public CommandLineRunner demo(ProjectRepository projectRepo, TaskRepository taskRepo) {
		return (args)->{
			ProjectEntity induPlovimas=new ProjectEntity("Indu plovimas", "Isplauti visus indus");
			TaskEntity saukstelioPlovimas=new TaskEntity("Saukstelio plovimas", "Nuplauti sauksteli", Priority.LOW, State.DONE, induPlovimas);
			TaskEntity puodelioPlovimas= new TaskEntity("Puodelio plovimas", "Isplauti puodeli", Priority.MEDIUM, State.DONE, induPlovimas);
			TaskEntity saukstoPlovimas= new TaskEntity("Sauksto plovimas", "Nuplauti sauksta", Priority.MEDIUM, State.INPROGRESS, induPlovimas);
			TaskEntity dubensPlovimas= new TaskEntity("Dubens plovimas", "Isplauti dubeni", Priority.HIGH, State.TODO, induPlovimas);
			induPlovimas.getTaskList().add(dubensPlovimas);
			induPlovimas.getTaskList().add(saukstelioPlovimas);
			induPlovimas.getTaskList().add(saukstoPlovimas);
			induPlovimas.getTaskList().add(puodelioPlovimas);
			induPlovimas.setGeneralTaskNumber();
			induPlovimas.setUnfinishedTaskNumber();
			induPlovimas.setProjectState();
			projectRepo.save(induPlovimas);
			taskRepo.save(saukstelioPlovimas);
			taskRepo.save(saukstoPlovimas);
			taskRepo.save(dubensPlovimas);
			taskRepo.save(puodelioPlovimas);
			
			ProjectEntity vakariene=new ProjectEntity("Vakariene", "Pasigaminti vakariene");
			TaskEntity sriuba=new TaskEntity("Sriubos virimas", "Sudeti bet ka i puoda, ipilti vandens", Priority.MEDIUM, State.DONE, vakariene);
			TaskEntity sriubosGelbejimas=new TaskEntity("Sriubos Pataisymas i valgoma", "ideti tarkuoto kieto smirdancio surio", Priority.HIGH, State.DONE, vakariene);
			TaskEntity arbata=new TaskEntity("Arbatos uzpylimas", "Arbata uzpilti vandeniu, liudeti, kad vakarais negali gerti kavos", Priority.MEDIUM, State.DONE, vakariene);
			vakariene.getTaskList().add(sriuba);
			vakariene.getTaskList().add(sriubosGelbejimas);
			vakariene.getTaskList().add(arbata);
			vakariene.setGeneralTaskNumber();
			vakariene.setUnfinishedTaskNumber();
			vakariene.setProjectState();
			projectRepo.save(vakariene);
			taskRepo.save(sriuba);
			taskRepo.save(sriubosGelbejimas);
			taskRepo.save(arbata);

		};
		
		
		
	}

}
