package lt.vtmc.projectTaskManagement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.repository.ProjectRepository;

@SpringBootApplication
public class ProjectTaskManagementApplication {

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
