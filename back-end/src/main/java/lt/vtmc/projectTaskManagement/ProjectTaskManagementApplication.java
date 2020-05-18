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
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select()
				.apis(RequestHandlerSelectors.basePackage("lt.vtmc.projectTaskManagement")).build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("Dokumentation").version("0.0.1-SNAPSHOT").build();
	}

	public static void main(String[] args) {
		SpringApplication.run(ProjectTaskManagementApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(ProjectRepository projectRepo, TaskRepository taskRepo) {
		return (args) -> {
			
//			-------->large project<-------
			ProjectEntity wedding=new ProjectEntity("Wedding", "Celebration's planning");
			TaskEntity guestList = new TaskEntity("Guest list", "Create list of guests",
					Priority.HIGH, State.DONE, wedding);
			TaskEntity date = new TaskEntity("Wedding's date", "Choose best date for ceremony and party",
					Priority.HIGH, State.DONE, wedding);
			TaskEntity invitations1 = new TaskEntity("Invitation design", "Create invitation design",
					Priority.LOW, State.DONE, wedding);
			TaskEntity invitations2 = new TaskEntity("Invitation delivering", "Deliver invitations for friends and family",
					Priority.HIGH, State.INPROGRESS, wedding);
			TaskEntity reservation1 = new TaskEntity("Church reservation", "Get church reservation for ceremony",
					Priority.HIGH, State.DONE, wedding);
			TaskEntity reservation2 = new TaskEntity("Hall reservation", "Get hall reservation for party",
					Priority.MEDIUM, State.DONE, wedding);
			TaskEntity photographer = new TaskEntity("Photographer", "Find photographer",
					Priority.MEDIUM, State.TODO, wedding);
			TaskEntity food = new TaskEntity("Food supplier", "Choose food supplier",
					Priority.HIGH, State.DONE, wedding);
			TaskEntity menu = new TaskEntity("Menu", "Decide on menu",
					Priority.MEDIUM, State.INPROGRESS, wedding);
			TaskEntity moderator = new TaskEntity("Moderator", "Find skilled wedding moderator",
					Priority.HIGH, State.TODO, wedding);
			TaskEntity music = new TaskEntity("Music", "Decide on music",
					Priority.LOW, State.TODO, wedding);
			TaskEntity activities = new TaskEntity("Involving activities", "Decide on guest involving activities",
					Priority.MEDIUM, State.INPROGRESS, wedding);
			TaskEntity clothes1 = new TaskEntity("Buy dress", "Buy a wedding dress",
					Priority.HIGH, State.TODO, wedding);
			TaskEntity clothes2 = new TaskEntity("Fit dress", "Tailor dress for best fit",
					Priority.LOW, State.TODO, wedding);
			TaskEntity clothes3 = new TaskEntity("Buy suit", "Buy a wedding suit",
					Priority.HIGH, State.TODO, wedding);
			TaskEntity clothes4 = new TaskEntity("Fit suit", "Tailor suit for best fit",
					Priority.LOW, State.TODO, wedding);
			TaskEntity danceTeacher = new TaskEntity("Dance teacher", "Find a dance teacher",
					Priority.MEDIUM, State.DONE, wedding);
			TaskEntity firstDance = new TaskEntity("First dance", "Create and learn first dance",
					Priority.MEDIUM, State.INPROGRESS, wedding);
			TaskEntity rings1 = new TaskEntity("Rings", "Buy wedding rings",
					Priority.HIGH, State.DONE, wedding);
			TaskEntity rings2 = new TaskEntity("Ring engraving", "Bring rings to jeweler",
					Priority.LOW, State.TODO, wedding);
			TaskEntity bouquet = new TaskEntity("Bouquet", "Buy a wedding bouquet",
					Priority.HIGH, State.TODO, wedding);
			wedding.getTaskList().add(guestList);
			wedding.getTaskList().add(date);
			wedding.getTaskList().add(invitations1);
			wedding.getTaskList().add(invitations2);
			wedding.getTaskList().add(reservation1);
			wedding.getTaskList().add(reservation2);
			wedding.getTaskList().add(photographer);
			wedding.getTaskList().add(food);
			wedding.getTaskList().add(menu);
			wedding.getTaskList().add(moderator);
			wedding.getTaskList().add(music);
			wedding.getTaskList().add(activities);
			wedding.getTaskList().add(clothes1);
			wedding.getTaskList().add(clothes2);
			wedding.getTaskList().add(clothes3);
			wedding.getTaskList().add(clothes4);
			wedding.getTaskList().add(danceTeacher);
			wedding.getTaskList().add(firstDance);
			wedding.getTaskList().add(rings1);
			wedding.getTaskList().add(rings2);
			wedding.getTaskList().add(bouquet);
			
			taskRepo.save(guestList);
			taskRepo.save(date);
			taskRepo.save(invitations1);
			taskRepo.save(invitations2);
			taskRepo.save(reservation1);
			taskRepo.save(reservation2);
			taskRepo.save(photographer);
			taskRepo.save(food);
			taskRepo.save(menu);
			taskRepo.save(moderator);
			taskRepo.save(music);
			taskRepo.save(activities);
			taskRepo.save(clothes1);
			taskRepo.save(clothes2);
			taskRepo.save(clothes3);
			taskRepo.save(clothes4);
			taskRepo.save(danceTeacher);
			taskRepo.save(firstDance);
			taskRepo.save(rings1);
			taskRepo.save(rings2);
			taskRepo.save(bouquet);
			
			projectRepo.save(wedding);
			
//			---->smallones<----
			ProjectEntity workout=new ProjectEntity("Core workout", "Excercise press and back");		
			TaskEntity pushups= new TaskEntity("Pushups", "Do pushups 20 reps, 3-4 sets", Priority.MEDIUM, State.TODO, workout);
			TaskEntity pullups= new TaskEntity("Pullups", "Do pullups 20 reps, 3-4 sets", Priority.HIGH, State.TODO, workout);
			TaskEntity situps= new TaskEntity("Situps", "Do situps 20 reps, 3-4 sets", Priority.LOW, State.TODO, workout);
			workout.getTaskList().add(pushups);
			workout.getTaskList().add(pullups);
			workout.getTaskList().add(situps);
			
			taskRepo.save(pushups);
			taskRepo.save(pullups);
			taskRepo.save(situps);
			projectRepo.save(workout);
						
			ProjectEntity travelBlog=new ProjectEntity("Travel blog", "Share useful information about travels");
			TaskEntity domain= new TaskEntity("Domain", "Buy a domain", Priority.HIGH, State.DONE, travelBlog);
			TaskEntity flights= new TaskEntity("Article about cheap flights", "Write an article about cheap flights", Priority.MEDIUM, State.DONE, travelBlog);
			TaskEntity destinations= new TaskEntity("Popular destinations", "Write an article about most popular destinations in 2020", Priority.MEDIUM, State.DONE, travelBlog);
			travelBlog.getTaskList().add(domain);
			travelBlog.getTaskList().add(flights);
			travelBlog.getTaskList().add(destinations);
			
			taskRepo.save(domain);
			taskRepo.save(flights);
			taskRepo.save(destinations);
			projectRepo.save(travelBlog);
			
			ProjectEntity holidays=new ProjectEntity("Holidays", "Take family to Tenerife island");
			TaskEntity hotel= new TaskEntity("Hotel", "Book a hotel", Priority.HIGH, State.DONE, holidays);
			TaskEntity flight= new TaskEntity("Flight", "Book a flight", Priority.HIGH, State.DONE, holidays);
			holidays.getTaskList().add(hotel);
			holidays.getTaskList().add(flight);
			
			taskRepo.save(hotel);
			taskRepo.save(flight);
			projectRepo.save(holidays);

		};

	}

}
