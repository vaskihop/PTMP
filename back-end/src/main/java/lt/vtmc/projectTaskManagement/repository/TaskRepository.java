package lt.vtmc.projectTaskManagement.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import lt.vtmc.projectTaskManagement.model.TaskEntity;

public interface TaskRepository extends CrudRepository<TaskEntity, Long> {

	List<TaskEntity> findTaskEntityByIdOrTaskTitleContainsIgnoreCase(Long id, String title);
}



